import React from 'react'
import Image from "next/image"

function CommercePage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-10">
      {/* Hero Section */}
      <div className="relative w-full h-56 md:h-56 flex items-center justify-center overflow-hidden mb-10">
        <Image
          src="/header.webp"
          alt="Commerce Banner"
          fill
          className="object-cover"
          style={{ zIndex: 0 }}
        />
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
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg py-8">
            Commerce Department
          </h1>
        </div>
      </div>
      {/* About Grid */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <div className="flex justify-center mb-6">
          <span className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-teal-400"></span>
        </div>
        <p className="text-lg md:text-xl text-gray-700 mb-4 font-medium">
          Welcome to the Commerce Department of Deshmukh Senior College (Arts, Commerce & Science).
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Based in Kasarsirsi, Tal. Nilanga, Dist. Latur and affiliated with Swami Ramanand Teerth Marathwada University, Nanded, our Commerce department introduces a fresh curriculum integrating modern business practices.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Our courses emphasize innovation in digital commerce, entrepreneurship, and practical business management.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <span className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium shadow-sm">
            Accounting & Finance
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 font-medium shadow-sm">
            Business Studies
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-700 font-medium shadow-sm">
            Digital Commerce
          </span>
        </div>
      </div>
      {/* ...existing or additional content... */}
      <div className="max-w-3xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Syllabus Overview</h2>
        <p className="text-lg mb-2 text-gray-700 text-center">
          The Commerce syllabus is updated as per the latest Maharashtra state guidelines. It blends core business fundamentals with digital trends and practical case studies.
        </p>
        <p className="text-base text-gray-600 text-center">
          Subjects include Accounting, Business Studies, Economics, Digital Marketing, and Entrepreneurship.
        </p>
      </div>
    </div>
  )
}

export default CommercePage