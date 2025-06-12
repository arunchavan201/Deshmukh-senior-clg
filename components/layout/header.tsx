"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MapPin, Phone, Mail, ChevronDown, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about" },
	{ name: "Academic Programs", href: "/academics" },
	{ name: "Faculty", href: "/academics/faculty" },
	{ name: "Committees", href: "/committees" }, // Added Committees navigation item
	{ name: "Facilities", href: "/facilities" },
	{ name: "Gallery", href: "/gallery" },
	{ name: "Contact Us", href: "/contact" },
]

const aboutOptions = [
	{ label: "About College", value: "college" },
	{ label: "Vision & Mission", value: "vision" },
	{ label: "Management", value: "management" },
	{ label: "Achievements", value: "achievements" },
]

const academicsOptions = [
	{ label: "Arts Stream", value: "arts" },
	{ label: "Commerce Stream", value: "commerce" },
	{ label: "Science Stream", value: "science" },
	{ label: "Admission Process", value: "admission" },
	{ label: "Academic Calendar", value: "calendar" },
	{ label: "Examination", value: "exams" },
]

const facultyOptions = [
	{ label: "Teaching Faculty", value: "teaching" },
	{ label: "Non-Teaching Faculty", value: "non-teaching" },
]

const committeesOptions = [
  { label: "Placement Cell", value: "placementcell" },
  { label: "Grievance Committee", value: "grievancecommittee" },
  { label: "Anti-Ragging Committee", value: "antiraggingcommittee" },
  { label: "Anti-Discrimination Cell", value: "antidiscriminationcell" },
  { label: "Vishakha Committee", value: "vishakhacommittee" },
  { label: "Avishkar Cell", value: "avishkarcell" },
  { label: "Development Committee", value: "developmentcommittee" },
  { label: "Managing Committee", value: "managingcommittee" },
]


export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [openDropdowns, setOpenDropdowns] = useState<string[]>([])

	const toggleDropdown = (itemName: string) => {
		setOpenDropdowns(prev =>
			prev.includes(itemName)
				? prev.filter(name => name !== itemName)
				: [...prev, itemName]
		)
	}

	return (
		<>
			{/* Top contact info bar */}
			<div className="w-full bg-indigo-600 text-white text-center py-2 text-sm">
				<span>Kasarsirsi, Tal. Nilanga, Dist. Latur | +91 9975469123 | deshmukhcollege@gmail.com</span>
			</div>
			
			<div className="container mx-auto px-4 py-4">
				{/* Logo and College Info */}
				<div className="flex items-center space-x-4">
					<div className="relative h-16 w-16 md:h-20 md:w-20">
						<div className="w-full h-full bg-gradient-to-br from-indigo-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
							<GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white" />
						</div>
					</div>
					<div>
						<h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent leading-tight">
							Deshmukh Senior College
						</h1>
						<p className="text-sm md:text-base text-gray-600 font-medium">
							Arts • Commerce • Science
						</p>
						<p className="text-xs text-gray-500">
							Affiliated to SRTMU, Nanded
						</p>
					</div>
				</div>
			</div>
			
			{/* Navigation row with CTA in same line */}
			<div className="w-full bg-indigo-50 border-t border-b border-indigo-200">
				<div className="container mx-auto px-4 py-3 flex items-center justify-between">
					<nav className="hidden lg:flex items-center space-x-8">
						{navigation.map((item) =>
							item.name === "Committees" ? (
								<DropdownMenu key={item.name}>
									<DropdownMenuTrigger asChild>
										<button className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors flex items-center">
											{item.name}
											<ChevronDown className="ml-1 h-4 w-4" />
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="bg-white/95 backdrop-blur-md">
										{committeesOptions.map((opt) => (
											<DropdownMenuItem
												key={opt.value}
												onClick={() => {
													window.location.href = `/committees?section=${opt.value}`
												}}
											>
												{opt.label}
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							) : item.name === "About Us" ? (
								<DropdownMenu key={item.name}>
									<DropdownMenuTrigger asChild>
										<button className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors flex items-center">
											{item.name}
											<ChevronDown className="ml-1 h-4 w-4" />
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="bg-white/95 backdrop-blur-md">
										{aboutOptions.map((opt) => (
											<DropdownMenuItem
												key={opt.value}
												onClick={() => {
													window.location.href =
														opt.value === "college"
															? "/about"
															: `/about?section=${opt.value}`
												}}
											>
												{opt.label}
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							) : item.name === "Academic Programs" ? (
								<DropdownMenu key={item.name}>
									<DropdownMenuTrigger asChild>
										<button className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors flex items-center">
											{item.name}
											<ChevronDown className="ml-1 h-4 w-4" />
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="bg-white/95 backdrop-blur-md">
										{academicsOptions.map((opt) => (
											<DropdownMenuItem
												key={opt.value}
												onClick={() => {
													window.location.href = `/academics/${opt.value}`
												}}
											>
												{opt.label}
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							) : item.name === "Faculty" ? (
								<DropdownMenu key={item.name}>
									<DropdownMenuTrigger asChild>
										<button className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors flex items-center">
											{item.name}
											<ChevronDown className="ml-1 h-4 w-4" />
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="bg-white/95 backdrop-blur-md">
										{facultyOptions.map((opt) => (
											<DropdownMenuItem
												key={opt.value}
												onClick={() => {
													window.location.href = `/academics/faculty?stream=${opt.value}`
												}}
											>
												{opt.label}
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							) : item.name === "Student Life" ? (
								<DropdownMenu key={item.name}>
									<DropdownMenuTrigger asChild>
										<button className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors flex items-center">
											{item.name}
											<ChevronDown className="ml-1 h-4 w-4" />
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="bg-white/95 backdrop-blur-md">
										{/* ...dropdown items if any... */}
									</DropdownMenuContent>
								</DropdownMenu>
							) : (
								<Link
									key={item.name}
									href={item.href}
									className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
								>
									{item.name}
								</Link>
							)
						)}
					</nav>
					{/* Apply Now button appears on same row */}
					<div className="hidden lg:block">
						<Button
							asChild
							className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white shadow-lg"
						>
							<Link href="/academics/admission">Apply Now</Link>
						</Button>
					</div>
				</div>
			</div>
			
			{/* CTA Button & Mobile Menu for mobile view */}
			<div className="container mx-auto px-4 py-4 flex items-center justify-between lg:hidden">
				<Button
					asChild
					className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white shadow-lg"
				>
					<Link href="/academics/admission">Apply Now</Link>
				</Button>
				<div>
					<button
						type="button"
						className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className="block h-6 w-6" />
						) : (
							<Menu className="block h-6 w-6" />
						)}
					</button>
				</div>
			</div>
			
			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="lg:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
					<div className="px-4 py-4 space-y-2">
						{navigation.map((item) =>
							item.name === "Committees" ? (
								<div key={item.name} className="space-y-1">
									<button
										className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
										onClick={() => toggleDropdown(item.name)}
									>
										<span>Committees</span>
										<ChevronDown
											className={`h-4 w-4 transition-transform ${
												openDropdowns.includes(item.name)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									{openDropdowns.includes(item.name) && (
										<div className="pl-4 space-y-1">
											{committeesOptions.map((opt) => (
												<button
													key={opt.value}
													className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
													onClick={() => {
														setMobileMenuOpen(false)
														setOpenDropdowns([])
														window.location.href = `/committees?section=${opt.value}`
													}}
												>
													{opt.label}
												</button>
											))}
										</div>
									)}
								</div>
							) : item.name === "About Us" ? (
								<div key={item.name} className="space-y-1">
									<button
										className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
										onClick={() => toggleDropdown(item.name)}
									>
										<span>About Us</span>
										<ChevronDown
											className={`h-4 w-4 transition-transform ${
												openDropdowns.includes(item.name)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									{openDropdowns.includes(item.name) && (
										<div className="pl-4 space-y-1">
											{aboutOptions.map((opt) => (
												<button
													key={opt.value}
													className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
													onClick={() => {
														setMobileMenuOpen(false)
														setOpenDropdowns([])
														window.location.href =
															opt.value === "college"
																? "/about"
																: `/about?section=${opt.value}`
													}}
												>
													{opt.label}
												</button>
											))}
										</div>
									)}
								</div>
							) : item.name === "Academic Programs" ? (
								<div key={item.name} className="space-y-1">
									<button
										className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
										onClick={() => toggleDropdown(item.name)}
									>
										<span>Academic Programs</span>
										<ChevronDown
											className={`h-4 w-4 transition-transform ${
												openDropdowns.includes(item.name)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									{openDropdowns.includes(item.name) && (
										<div className="pl-4 space-y-1">
											{academicsOptions.map((opt) => (
												<button
													key={opt.value}
													className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
													onClick={() => {
														setMobileMenuOpen(false)
														setOpenDropdowns([])
														window.location.href = `/academics/${opt.value}`
													}}
												>
													{opt.label}
												</button>
											))}
										</div>
									)}
								</div>
							) : item.name === "Faculty" ? (
								<div key={item.name} className="space-y-1">
									<button
										className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
										onClick={() => toggleDropdown(item.name)}
									>
										<span>Faculty</span>
										<ChevronDown
											className={`h-4 w-4 transition-transform ${
												openDropdowns.includes(item.name)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									{openDropdowns.includes(item.name) && (
										<div className="pl-4 space-y-1">
											{facultyOptions.map((opt) => (
												<button
													key={opt.value}
													className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
													onClick={() => {
														setMobileMenuOpen(false)
														setOpenDropdowns([])
														window.location.href = `/academics/faculty?stream=${opt.value}`
													}}
												>
													{opt.label}
												</button>
											))}
										</div>
									)}
								</div>
							) : item.name === "Student Life" ? (
								<div key={item.name} className="space-y-1">
									<button
										className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
										onClick={() => toggleDropdown(item.name)}
									>
										<span>Student Life</span>
										<ChevronDown
											className={`h-4 w-4 transition-transform ${
												openDropdowns.includes(item.name)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									{openDropdowns.includes(item.name) && (
										<div className="pl-4 space-y-1">
											{studentLifeOptions.map((opt) => (
												<button
													key={opt.value}
													className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
													onClick={() => {
														setMobileMenuOpen(false)
														setOpenDropdowns([])
														window.location.href = `/student-life?section=${opt.value}`
													}}
												>
													{opt.label}
												</button>
											))}
										</div>
									)}
								</div>
							) : (
								<Link
									key={item.name}
									href={item.href}
									className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
									onClick={() => {
										setMobileMenuOpen(false)
										setOpenDropdowns([])
									}}
								>
									{item.name}
								</Link>
							)
						)}
						<Button
							asChild
							className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white mt-4"
						>
							<Link href="/academics/admission">Apply Now</Link>
						</Button>
					</div>
				</div>
			)}
		</>
	)
}
