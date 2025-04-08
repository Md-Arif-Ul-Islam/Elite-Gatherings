// Import React module
import React from 'react'

// Import sidebar and UI components
import AdminSidebar from '@/components/AdminSidebar'
import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'

// Import icons used in the layout
import { BellRing, LogOut, Menu, User } from 'lucide-react'

// Import router navigation link
import { Link } from 'react-router-dom'

// Import dropdown menu components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Import sidebar context and trigger
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

// Props type for admin layout children
interface AdminLayoutProps {
  children: React.ReactNode
}

// Admin layout component
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      {/* Root container with sidebar and main content */}
      <div className="min-h-screen flex w-full">

        {/* Admin sidebar */}
        <AdminSidebar />

        {/* Main content area */}
        <div className="flex-1 flex flex-col">

          {/* Header with page title and user actions */}
          <header className="border-b bg-background z-10">
            <div className="flex items-center justify-between px-4 h-16">

              {/* Sidebar trigger and title */}
              <div className="flex items-center">
                <SidebarTrigger>
                  <Menu className="h-5 w-5" />
                </SidebarTrigger>
                <h1 className="ml-4 text-lg font-semibold md:text-xl">Admin Dashboard</h1>
              </div>

              {/* Notification and user menu */}
              <div className="flex items-center gap-4">

                {/* Notification bell */}
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <BellRing className="h-5 w-5" />
                </Button>

                {/* Dropdown user menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Admin User</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>
            </div>
          </header>

          {/* Main page content */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>

        </div>

        {/* Toast notifications container */}
        <Toaster />

      </div>
    </SidebarProvider>
  )
}

// Export admin layout component
export default AdminLayout
