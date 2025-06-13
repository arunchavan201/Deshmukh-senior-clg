import Image from "next/image"
import { AboutTabs } from "@/components/about/about-tabs"
import clientPromise from "@/lib/mongodb"
import { WithId } from 'mongodb'

interface AboutContent extends WithId<Document> {
  institute: string
  society: string
  vision?: string
  mission?: string

}

interface Leader extends WithId<Document> {
  name: string
  role: string
  position: string
  message?: string
  imageId?: string
  createdAt: Date
  updatedAt: Date
}

async function getAboutContent() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")

    const aboutContent = await db.collection("content").findOne({ section: "about" }) as AboutContent
    const directors = await db.collection("directors").find({}).sort({ order: 1 }).toArray()
    const leadership = await db.collection("leadership").find({}).toArray() as Leader[]
    
    return {
      about: aboutContent || { institute: "", society: "" },
      directors: directors || [],
      leadership: leadership || [],
    }
  } catch (error) {
    console.error("Error fetching about content:", error)
    return {
      about: { institute: "", society: "" },
      directors: [],
      leadership: [],
    }
  }
}



// Add a reusable AboutPageHero component for the headline/banner
function AboutPageHero({ title, bgImage }: { title: string; bgImage?: string }) {
  return (
    <div className="relative w-full h-56 md:h-56 flex items-center justify-center overflow-hidden">
      {bgImage && (
        <Image
          src={bgImage}
          alt="About Banner"
          fill
          className="object-cover"
          style={{ zIndex: 0 }}
        />
      )}
      {/* Unique overlay with multiple gradients and shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Main color gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/70 via-teal-600/60 to-purple-400/40" />
        {/* Decorative blurred circles */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-400/30 rounded-full blur-2xl" />
        <div className="absolute top-10 right-0 w-40 h-40 bg-teal-300/30 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-white/10 rounded-full blur-3xl" />
        {/* Diagonal slant at the bottom */}
        <svg className="absolute bottom-0 left-0 w-full" height="40" viewBox="0 0 100 10" preserveAspectRatio="none">
          <polygon points="0,10 100,0 100,10" fill="#F7F9FC" />
        </svg>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full font-poppins">
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center drop-shadow-lg py-8">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default async function AboutPage({ searchParams }: { searchParams: { section?: string } }) {
  const { about, directors, leadership } = await getAboutContent()

  const section =
    searchParams.section === "society"
      ? "society"
      : searchParams.section === "vision"
      ? "vision"
      : searchParams.section === "directors"
      ? "directors"
      : searchParams.section === "leadership"
      ? "leadership"
      : "institute"

  return (
    <div>
      <AboutPageHero
        title={
          section === "institute"
            ? "About Deshmukh Senior College (Arts, Commerce & Science)"
            : section === "society"
            ? "About Society"
            : section === "vision"
            ? "Vision & Mission"
            : section === "directors"
            ? "Directors"
            : section === "leadership"
            ? "Messages from Leadership"
            : "About"
        }
        bgImage="/header.webp"
      />
      <div className="container mx-auto px-4 py-12">
        <AboutTabs about={about} directors={directors} leadership={leadership} section={section} />
      </div>
    </div>
  )
}
