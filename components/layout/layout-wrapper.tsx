'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface LayoutWrapperProps {
  children: ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  
  // Check if it's an admin route or special page
  const isAdminRoute = pathname?.includes('/admin')
  const isAuthPage = pathname?.includes('/auth') || pathname?.includes('/login')
  
  // Base classes for consistent styling
  const baseClasses = "min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"
  
  // Special styling for different page types
  const getPageClasses = () => {
    if (isAdminRoute) {
      return "min-h-screen bg-gray-100"
    }
    
    if (isAuthPage) {
      return "min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600"
    }
    
    return baseClasses
  }

  return (
    <div className={getPageClasses()}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
