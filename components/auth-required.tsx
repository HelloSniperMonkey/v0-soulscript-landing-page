"use client"

import { useAuth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

export default function AuthRequired({ children }: { children: ReactNode }) {
  const { userId, isLoaded } = useAuth()
  
  if (!isLoaded) {
    // You might want to show a loading state here
    return <div>Loading...</div>
  }
  
  if (!userId) {
    redirect("/sign-in")
  }
  
  return <>{children}</>
}
