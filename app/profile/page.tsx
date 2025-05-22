"use client"

import { UserProfile } from "@clerk/nextjs"
import AuthRequired from "@/components/auth-required"

export default function ProfilePage() {
  return (
    <AuthRequired>
      <div className="container mx-auto py-20 px-4">
        <div className="mt-16 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
          <UserProfile 
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "mx-auto shadow-md rounded-lg",
                navbar: "hidden",
                navbarMobileMenuButton: "hidden",
                headerTitle: "text-2xl font-bold",
                headerSubtitle: "text-gray-600",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white"
              }
            }}
          />
        </div>
      </div>
    </AuthRequired>
  )
}
