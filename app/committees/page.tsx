import { CommitteeTabs } from "@/components/committees/committee-tabs"
import clientPromise from "@/lib/mongodb"
import Image from "next/image"

async function getCommittees() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")

    const committees = await db.collection("committees").find({}).toArray()
    return committees
  } catch (error) {
    console.error("Error fetching committees:", error)
    return []
  }
}

function SectionHero({ title, bgImage }: { title: string; bgImage?: string }) {
  return (
    <div className="relative w-full h-56 md:h-56 flex items-center justify-center overflow-hidden">
      {bgImage && (
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover"
          style={{ zIndex: 0 }}
        />
      )}
      {/* Unique overlay with multiple gradients and shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/70 via-teal-600/60 to-purple-400/40" />
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-400/30 rounded-full blur-2xl" />
        <div className="absolute top-10 right-0 w-40 h-40 bg-teal-300/30 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-white/10 rounded-full blur-3xl" />
        <svg className="absolute bottom-0 left-0 w-full" height="40" viewBox="0 0 100 10" preserveAspectRatio="none">
          <polygon points="0,10 100,0 100,10" fill="#F7F9FC" />
        </svg>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center drop-shadow-lg py-8">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default async function CommitteesPage({ searchParams }: { searchParams: { section?: string } }) {
  const committees = await getCommittees()

  // Define default committees if none are found in the database
  const defaultCommittees = [
    {
      name: "Placement Cell",
      members: [],
    },
    {
      name: "Grievance Committee",
      members: [],
    },
    {
      name: "Anti-Ragging Committee",
      members: [],
    },
    {
      name: "Anti-Discrimination Cell",
      members: [],
    },
    {
      name: "Vishakha Committee",
      members: [],
    },
    {
      name: "Avishkar Cell",
      members: [],
    },
    {
      name: "Development Committee",
      members: [],
    },
    {
      name: "Managing Committee",
      members: [],
    },
  ]

  // Merge database committees with default committees
  const allCommittees = committees.length > 0 ? committees : defaultCommittees

  const section = searchParams.section || "antiragging" // default section

  return (
    <>
      <SectionHero title="Committees" bgImage="/header.webp" />
      <main className="container py-10">
        <CommitteeTabs committees={allCommittees} section={section} />
      </main>
    </>
  )
}
