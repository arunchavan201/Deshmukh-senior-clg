import { CheckCircle, Award, Users, BookOpen, Microscope, Calculator, Palette, Globe } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "SRTMU Affiliation",
    description: "Affiliated with Swami Ramanand Teerth Marathwada University, Nanded",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Well-structured programs in Arts, Commerce, and Science streams",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Qualified and dedicated teachers with industry experience",
  },
  {
    icon: Microscope,
    title: "Modern Laboratories",
    description: "Well-equipped science labs with latest instruments and equipment",
  },
  {
    icon: Calculator,
    title: "Career Guidance",
    description: "Professional counseling for higher studies and career planning",
  },
  {
    icon: Palette,
    title: "Holistic Development",
    description: "Focus on co-curricular activities and personality development",
  },
  {
    icon: Globe,
    title: "Rural Location Advantage",
    description: "Peaceful campus environment ideal for focused learning",
  },
  {
    icon: CheckCircle,
    title: "Value-Based Education",
    description: "Emphasis on ethics, character building, and social responsibility",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium text-sm mb-4">
            <Award className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Excellence in Every
            <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Aspect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Deshmukh Senior College the preferred choice for
            quality education in Arts, Commerce, and Science.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-200">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray-600 font-medium">Students Enrolled</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <p className="text-gray-600 font-medium">Expert Faculty</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <p className="text-gray-600 font-medium">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  )
}
