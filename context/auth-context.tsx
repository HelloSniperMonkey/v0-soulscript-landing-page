"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useAuth as useClerkAuth, useUser, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"
import type { JSX } from "react"

interface AuthContextType {
  isLoggedIn: boolean
  userId: string | null
  login: () => JSX.Element
  logout: () => JSX.Element
  userButton: () => JSX.Element
  user: ReturnType<typeof useUser>["user"]
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { isLoaded, userId } = useClerkAuth()
  const { user } = useUser()
  
  const isLoggedIn = isLoaded && !!userId

  const login = () => <SignInButton />
  const logout = () => <SignOutButton />
  const userButton = () => <UserButton />

  return (
    <AuthContext.Provider 
      value={{ 
        isLoggedIn, 
        userId: userId || null, 
        login, 
        logout, 
        userButton, 
        user 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
