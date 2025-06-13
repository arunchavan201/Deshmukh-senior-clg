import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Download, Info } from "lucide-react"
import clientPromise from "@/lib/mongodb"
import Image from "next/image"

async function getAcademicCalendars() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")

    const calendars = await db.collection("academic_calendars").find({}).sort({ createdAt: -1 }).toArray()
    return JSON.parse(JSON.stringify(calendars))
  } catch (error) {
    console.error("Error fetching academic calendars:", error)
    return []
  }
}

function SectionHero({ title, bgImage }: { title: string; bgImage?: string }) {
  return (
    <div className="relative w-full h-56 md:h-56 flex items-center justify-center overflow-hidden mb-10">
      {bgImage && (
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover"
          style={{ zIndex: 0 }}
        />
      )}
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

export default async function AcademicCalendarPage() {
  const calendars = await getAcademicCalendars()

  return (
    <>
      <SectionHero title="Academic Calendar" bgImage="/header.webp" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Academic Calendar</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Academic Year 2024-25</h2>
            <p className="text-gray-700 mb-6">
              The academic calendar provides important dates and schedules for the academic year, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li>Semester start and end dates</li>
              <li>Examination schedules</li>
              <li>Holiday and vacation periods</li>
              <li>Events and workshops</li>
              <li>Project submission deadlines</li>
              <li>Result announcements</li>
            </ul>
            <p className="text-gray-700">
              Students are advised to regularly check the academic calendar for any updates or changes to the schedule.
            </p>
          </div>

          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg?height=300&width=500&text=Academic Calendar"
              alt="Academic Calendar"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {calendars && calendars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calendars.map((calendar:any) => (
              <Card key={calendar._id} className="hover:shadow-lg transition-shadow border-rose-100">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="font-semibold mb-2 text-purple-800">{calendar.title}</h3>
                  {calendar.academicYear && (
                    <p className="text-sm text-gray-500 mb-4">Academic Year: {calendar.academicYear}</p>
                  )}
                  <p className="text-sm text-gray-500 mb-6">
                    Added on {new Date(calendar.createdAt).toLocaleDateString()}
                  </p>
                  <Button asChild className="mt-auto  bg-blue-600:bg-blue-700">
                    <a href={`/api/files/${calendar.fileId}`} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" /> Download Calendar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">No Academic Calendars Available</h3>
            <p className="text-gray-500">
              The academic calendar documents will be uploaded soon. Please check back later.
            </p>
          </div>
        )}

        <div className="mt-12 flex gap-6 flex-col md:flex-row">
          <Card className="flex-1 hover:shadow-lg transition-shadow border-rose-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Info className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-purple-800">Important Notice</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The academic calendar is subject to change. Any changes will be communicated through official channels and
                the updated calendar will be uploaded here.
              </p>
            </CardContent>
          </Card>

          <Card className="flex-1 hover:shadow-lg transition-shadow border-rose-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Info className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-purple-800">Contact Information</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For any queries regarding the academic calendar, please contact the Academic Office:
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> academic@nifd.edu
                <br />
                <span className="font-medium">Phone:</span> +91 9975469123

              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
