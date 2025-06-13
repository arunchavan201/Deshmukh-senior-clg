import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-teal-600" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-36 -translate-y-36 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-300/20 rounded-full translate-x-36 translate-y-36 blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-medium text-sm mb-6">
            <Users className="w-4 h-4 mr-2" />
            Join Our Community
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Shape Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Academic Future?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of students who have chosen Deshmukh Senior College for quality education 
            in Arts, Commerce, and Science. Applications are now open for the upcoming academic year.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Link href="/academics/programs" className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-xl"
            >
              <Link href="/academics/admission" className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Apply Now
              </Link>
            </Button>
          </div>
          
          {/* Contact info */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-purple-200 text-sm font-medium mb-1">Admission Helpline</p>
                <p className="text-white font-semibold">+91 9975469123</p>
              </div>
              <div>
                <p className="text-purple-200 text-sm font-medium mb-1">Email Us</p>
                <p className="text-white font-semibold">admissions@deshmukhcollege.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
