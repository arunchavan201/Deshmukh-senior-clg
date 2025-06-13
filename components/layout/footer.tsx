import Link from "next/link"
import { Mail, Phone, Clock, MapPin, BookOpen, Users, Award } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.02&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Deshmukh Senior College
              </h3>
              <p className="text-gray-400 font-medium">Arts • Commerce • Science</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Affiliated with Swami Ramanand Teerth Marathwada University, Nanded. 
              We are committed to providing quality education and nurturing future leaders 
              through comprehensive academic programs and holistic development.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">SRTMU Affiliated</p>
                <p className="text-sm text-gray-400">University Recognition</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
              Academics
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/academics/arts" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Arts Stream
                </Link>
              </li>
              <li>
                <Link href="/academics/commerce" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Commerce Stream
                </Link>
              </li>
              <li>
                <Link href="/academics/science" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Science Stream
                </Link>
              </li>
              <li>
                <Link href="/academics/faculty" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/academics/admission" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-teal-400" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Deshmukh Senior College<br />
                  Kasarsirsi, Tal. Nilanga<br />
                  Dist. Latur - 413607
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:deshmukhcollege@gmail.com"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm"
                >
                  deshmukhcollege@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+919975469123" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm">
                  +91 9975469123
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mon-Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Deshmukh Senior College. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
