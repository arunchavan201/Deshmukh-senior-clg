"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, BookOpen, Users, Award } from "lucide-react"

const slides = [
	{
		id: 1,
		image: "/bg.jpg?height=600&width=1200",
		title: "Excellence in Arts Education",
		description: "Discover the world of literature, philosophy, and creative expression",
		cta: "Explore Arts",
		link: "/academics/arts",
	},
	{
		id: 2,
		image: "/bg.jpg?height=600&width=1200",
		title: "Commerce & Business Studies",
		description: "Build your foundation in commerce, economics, and business management",
		cta: "View Commerce",
		link: "/academics/commerce",
	},
	{
		id: 3,
		image: "/bg.jpg?height=600&width=1200",
		title: "Scientific Innovation",
		description: "Explore the frontiers of science with modern laboratories and research",
		cta: "Discover Science",
		link: "/academics/science",
	},
]

export default function HeroBanner() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
	}

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide()
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className="w-full bg-gradient-to-br from-purple-50 via-white to-teal-50 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-teal-100/20" />
			<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/30 to-transparent rounded-full blur-3xl" />
			
			<div className="relative z-10 flex flex-col lg:flex-row min-h-[80vh]">
				{/* Left content section */}
				<div className="w-full lg:w-3/5 flex items-center justify-center px-6 sm:px-12 py-16 lg:py-24">
					<div className="max-w-2xl text-center lg:text-left">
						{/* Badge */}
						<div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-full text-purple-600 text-sm font-medium mb-6 shadow-lg">
							<Award className="w-4 h-4 mr-2" />
							SRTMU Affiliated College
						</div>
						
						{/* Main heading */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
							<span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
								Deshmukh
							</span>
							<br />
							Senior College
						</h1>
						
						{/* Subtitle */}
						<div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
							<div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-teal-500" />
							<span className="text-gray-600 font-medium">Arts • Commerce • Science</span>
							<div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-purple-500" />
						</div>
						
						{/* Description */}
						<p className="text-lg text-gray-600 mb-8 leading-relaxed">
							Empowering minds through quality education in Arts, Commerce, and Science. 
							Located in Kasarsirsi, we are committed to nurturing tomorrow's leaders with 
							academic excellence and holistic development.
						</p>
						
						{/* Action buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 rounded-xl font-semibold text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
								<BookOpen className="w-5 h-5 mr-2" />
								Explore Programs
							</Button>
							<Button variant="outline" className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-6 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg">
								<Users className="w-5 h-5 mr-2" />
								Virtual Tour
							</Button>
						</div>
					</div>
				</div>
				
				{/* Right slider section */}
				<div className="w-full lg:w-2/5 relative">
					<div className="relative h-[400px] lg:h-full overflow-hidden">
						<Image
							src={slides[currentSlide].image}
							alt={slides[currentSlide].title}
							fill
							className="object-cover transition-all duration-700 rounded-2xl"
							priority
						/>
						
						{/* Content overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20 rounded-2xl" />
						<div className="absolute bottom-8 left-8 right-8 text-white z-30">
							<h3 className="text-2xl font-bold mb-3">
								{slides[currentSlide].title}
							</h3>
							<p className="text-white/90 mb-4">
								{slides[currentSlide].description}
							</p>
							<Button
								asChild
								className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
							>
								<Link href={slides[currentSlide].link}>
									{slides[currentSlide].cta}
								</Link>
							</Button>
						</div>
						
						{/* Navigation */}
						<button
							onClick={prevSlide}
							className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
						>
							<ChevronLeft className="h-5 w-5" />
						</button>
						<button
							onClick={nextSlide}
							className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
						>
							<ChevronRight className="h-5 w-5" />
						</button>
						
						{/* Dots */}
						<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
							{slides.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentSlide(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentSlide 
											? "bg-white shadow-lg" 
											: "bg-white/50 hover:bg-white/70"
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
