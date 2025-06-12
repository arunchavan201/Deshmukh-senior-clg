import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] py-10 px-4 text-[#111827]">
      {/* New detailed Science page content */}
      <h1 className="text-4xl font-bold mb-6" style={{ color: "#4B6EF5" }}>
        Science Department
      </h1>
      <p className="text-lg mb-4">
        Welcome to the Science Department of Deshmukh Senior College (Arts, Commerce & Science).
      </p>
      <p className="mb-6">
        Situated in Kasarsirsi, Tal. Nilanga, Dist. Latur and affiliated with Swami Ramanand Teerth Marathwada University, Nanded, our Science department offers a forward-looking and research-oriented curriculum that emphasizes hands-on learning and innovation.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Syllabus Overview</h2>
        <p className="text-lg mb-2">
          Our syllabus is crafted in accordance with the Maharashtra state board’s latest recommendations, integrating advanced laboratory work, theoretical knowledge, and practical projects.
        </p>
        <p>
          Key subjects include Physics, Chemistry, Biology, Mathematics, and Environmental Science with an emphasis on research, experimentation, and modern technology.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Department Highlights</h2>
        <p className="text-lg mb-2">
          Our state-of-the-art laboratories, interactive teaching methods, and industry partnerships ensure that students gain hands-on experience and develop critical scientific thinking.
        </p>
      </div>
      {/* ...additional content as needed... */}
    </div>
  )
}

export default page