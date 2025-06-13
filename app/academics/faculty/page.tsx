import Link from "next/link"
import Image from "next/image"
import { FacultyTabs } from "@/components/faculty/faculty-tabs"
import { headers } from 'next/headers'

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

interface Faculty {
  _id: string;
  name: string;
  designation: string;
  department?: string;
  qualification?: string;
  experience?: string;
  specialization?: string;
  email?: string;
  bio?: string;
  imageId?: string;
  isTeaching?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ApiResponse {
  success: boolean;
  data: Faculty[];
  error?: string;
}

interface FacultyData {
  teaching: Faculty[];
  nonTeaching: Faculty[];
}

async function getFaculty(): Promise<FacultyData> {
  try {
    const headersList = await headers()
    const host = headersList.get('host') || 'localhost:3000'
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
    
    const response = await fetch(`${protocol}://${host}/api/faculty`, {
      next: { revalidate: 0 },
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
    
    const { success, data } = await response.json() as ApiResponse
    if (!success) throw new Error('Failed to fetch faculty')

    const teaching = data.filter(f => f.isTeaching !== false)
    const nonTeaching = data.filter(f => f.isTeaching === false)

    return { teaching, nonTeaching }
  } catch (error) {
    console.error("Error fetching faculty:", error)
    return { teaching: [], nonTeaching: [] }
  }
}

export default async function FacultyPage({ searchParams }: { searchParams: { stream?: string } }) {
  const { teaching, nonTeaching } = await getFaculty()
  // Use the 'stream' property directly to determine the active tab  
  const activeTab = searchParams.stream || 'teaching'
  
  // Display faculty based on active tab without passing defaultTab prop
  const facultyToShow = activeTab === 'non-teaching' ? nonTeaching : teaching
  const title = activeTab === 'non-teaching' ? 'Non-Teaching Faculty' : 'Teaching Faculty'

  return (
    <>
      <SectionHero title="Our Faculty & Staff" bgImage="/header.webp" />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-800">{title}</h2>
        {/* Display faculty grid directly instead of using FacultyTabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyToShow.map((faculty) => (
            <div key={faculty._id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">{faculty.name}</h3>
              <p className="text-gray-600 mb-1">{faculty.designation}</p>
              {faculty.qualification && (
                <p className="text-gray-500 text-sm mb-2">{faculty.qualification}</p>
              )}
              {faculty.specialization && (
                <p className="text-gray-500 text-sm mb-2">Specialization: {faculty.specialization}</p>
              )}
              {faculty.experience && (
                <p className="text-gray-500 text-sm">Experience: {faculty.experience}</p>
              )}
            </div>
          ))}
        </div>
        {facultyToShow.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No faculty members found in this category.</p>
          </div>
        )}
      </div>
    </>
  )
}
