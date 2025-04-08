// Import React module
import React from 'react'

// Import layout components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Import toaster notification component
import { Toaster } from '@/components/ui/sonner'

// Define props for main layout
interface MainLayoutProps {
  children: React.ReactNode
}

// Main layout component
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    // Root layout container with vertical flex
    <div className="flex flex-col min-h-screen">

      {/* Page header */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Page footer */}
      <Footer />

      {/* Toast notifications */}
      <Toaster />
    </div>
  )
}

// Export main layout component
export default MainLayout
