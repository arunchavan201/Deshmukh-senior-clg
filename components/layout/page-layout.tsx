'use client'

import { usePathname } from 'next/navigation'
import Header from './header'
import LayoutWrapper from './layout-wrapper'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.includes('admin')
  const isAuthPage = pathname?.includes('/auth') || pathname?.includes('/login')

  return (
    <LayoutWrapper>
      {!isAdminRoute && !isAuthPage && <Header />}
      <main className="relative pt-4">
        {children}
      </main>
    </LayoutWrapper>
  )
}
