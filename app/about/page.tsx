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
    <div className="relative w-full h-40 md:h-56 flex items-center justify-center">
      {bgImage && (
        <Image
          src={bgImage}
          alt="About Banner"
          fill
          className="object-cover"
          style={{ zIndex: 0 }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-700/80 to-teal-500/80" style={{ zIndex: 1 }} />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full font-poppins">
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center drop-shadow-lg py-8">
          {title}
        </h1>
      </div>
      {/* Slant/clip effect at the bottom */}
      <svg className="absolute bottom-0 left-0 w-full" height="32" viewBox="0 0 100 10" preserveAspectRatio="none" style={{ zIndex: 2 }}>
        <polygon points="0,10 100,0 100,10" fill="#F7F9FC" />
      </svg>
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
        bgImage="/about.avif"
      />
      <div className="container mx-auto px-4 py-12">
        <AboutTabs about={about} directors={directors} leadership={leadership} section={section} />
      </div>
    </div>
  )
}
