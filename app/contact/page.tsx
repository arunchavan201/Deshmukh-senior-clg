import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock, MapPin } from "lucide-react"

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

export default function ContactPage() {
  return (
    <>
      <SectionHero title="Contact Us" bgImage="/header.webp" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 text-purple-800">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow border-blue-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-white bg-purple-600 p-3 rounded-full mb-4 shadow-md">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-purple-800">Email</h3>
              <a href="mailto:deshmukhpharmacy2022@gmail.com" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                deshmukhpharmacy2022@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-blue-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-white bg-purple-600 p-3 rounded-full mb-4 shadow-md">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-purple-800">Phone</h3>
              <a href="tel:+91975469123" className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                +91 9975469123
              </a>
              <a href="tel:+918411888588" className="text-purple-600 hover:text-purple-700 hover:underline mt-1 transition-colors">
                +91 8411888588
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-blue-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-white bg-purple-600 p-3 rounded-full mb-4 shadow-md">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-purple-800">Working Hours</h3>
              <p className="text-gray-700">Monday - Saturday</p>
              <p className="text-gray-700">9:00 AM - 5:00 PM</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-blue-100 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-purple-800">Send Us a Message</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-purple-700 font-medium">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      required 
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-700 font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-purple-700 font-medium">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Enter subject" 
                    required 
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-purple-700 font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Enter your message" 
                    rows={5} 
                    required 
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="bg-purple-600 hover:bg-purple-700 text-white w-full md:w-auto px-8 py-2 transition-colors shadow-md"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15186.013811134044!2d76.74156135!3d17.937091199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf4166f8287605%3A0xec1001da3d0dfc40!2sDESHMUKH%20COLLEGE%20OF%20PHARMACY%20KASAR%20SIRSI!5e0!3m2!1sen!2sin!4v1701840230740!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Deshmukh College Of Pharmacy"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-100 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="text-white bg-purple-600 p-2 rounded-full mr-4 mt-1">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-800 text-lg">Our Address</h3>
                <p className="text-gray-700 leading-relaxed">
                  Deshmukh College Of Pharmacy,
                  <br />
                  Kasar Sirsi 413607,
                  <br />
                  Tq. Nilanga, Dist. Latur
                  <br />
                  Affiliated to S.N.D.T.W University, Mumbai
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
