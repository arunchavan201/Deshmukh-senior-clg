import Image from "next/image"
import Link from "next/link"
import { Target, GraduationCap, Users, BookOpen } from "lucide-react"

export default function InstituteHighlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            About Our College
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nurturing Excellence in
            <span className="bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent"> Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deshmukh Senior College stands as a beacon of quality education, affiliated with 
            Swami Ramanand Teerth Marathwada University, Nanded, offering comprehensive programs 
            in Arts, Commerce, and Science.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Academic Excellence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive curriculum in Arts, Commerce, and Science is designed to meet 
                modern educational standards while preserving traditional academic values. 
                We focus on holistic development through innovative teaching methodologies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Expert Faculty</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated faculty members bring years of academic and industry experience, 
                providing students with practical knowledge and theoretical foundations that 
                prepare them for successful careers and higher education.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/student.jpg"
                alt="Students at Deshmukh Senior College"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-2xl border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">15+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Years of Excellence</p>
                  <p className="text-sm text-gray-600">Serving the community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 mr-4" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-indigo-100 leading-relaxed text-lg">
                To be a premier educational institution that transforms students into well-rounded 
                individuals, equipped with knowledge, skills, and values to contribute meaningfully 
                to society and excel in their chosen fields.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 p-8 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 mr-4" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-teal-100 leading-relaxed text-lg">
                To provide quality education that nurtures critical thinking, creativity, and 
                character development while fostering an inclusive learning environment that 
                prepares students for academic and professional success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link href="/about">
            <button className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Learn More About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
