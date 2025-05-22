import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/context/auth-context"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoulScript - AI-Powered Therapy",
  description: "Accessible therapy through AI, bridging the gap when traditional therapy feels out of reach.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <AuthProvider>{children}</AuthProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
