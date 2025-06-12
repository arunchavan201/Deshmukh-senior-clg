import "../lib/react-polyfill" // Import the polyfill first
import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Providers } from "./providers"
import Footer from "@/components/layout/footer"
import PageLayout from "@/components/layout/page-layout"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata = {
  title: "Deshmukh Senior College - Arts, Commerce & Science",
  description: "Affiliated to Swami Ramanand Teerth Marathwada University, Nanded",
  keywords: "arts, commerce, science, college, education, university, SRTMU, Nanded",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}>
      <body className={`${inter.className} bg-slate-50 text-gray-800`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <PageLayout>
              <main className="flex-1">{children}</main>
            </PageLayout>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}