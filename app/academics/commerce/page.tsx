import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] py-10 px-4 text-[#111827]">
      <h1 className="text-4xl font-bold mb-6" style={{ color: "#4B6EF5" }}>
        Commerce Department
      </h1>
      <p className="text-lg mb-4">
        Welcome to the Commerce Department of Deshmukh Senior College (Arts, Commerce & Science).
      </p>
      <p className="mb-6">
        Based in Kasarsirsi, Tal. Nilanga, Dist. Latur and affiliated with Swami Ramanand Teerth Marathwada University, Nanded, our Commerce department introduces a fresh curriculum integrating modern business practices.
      </p>
      <p>
        Our courses emphasize innovation in digital commerce, entrepreneurship, and practical business management.
      </p>
      {/* New Syllabus Overview Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Syllabus Overview</h2>
        <p className="text-lg mb-2">
          The Commerce syllabus is updated as per the latest Maharashtra state guidelines. It blends core business fundamentals with digital trends and practical case studies.
        </p>
        <p>
          Subjects include Accounting, Business Studies, Economics, Digital Marketing, and Entrepreneurship.
        </p>
      </div>
      {/* ...existing or additional content... */}
    </div>
  )
}

export default page