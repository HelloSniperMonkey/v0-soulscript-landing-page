"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isLoggedIn, login, logout } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500">
              SoulScript
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="https://v0-mongo-db-journal-app.vercel.app/" className="text-gray-300 hover:text-white transition-colors">
              Journal
            </Link>
            <Link href="/persona-dashboard" className="text-gray-300 hover:text-white transition-colors">
              Persona Dashboard
            </Link>
            <Link href="https://soulscript01.vercel.app" className="text-gray-300 hover:text-white transition-colors">
              Interactive Chatbot
            </Link>
            <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors">
              Blogs
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Button variant="ghost" onClick={logout} className="text-white hover:bg-purple-900/30">
                Sign Out
              </Button>
            ) : (
              <>
                <Button variant="ghost" onClick={login} className="text-white hover:bg-purple-900/30">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/journal"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Journal
            </Link>
            <Link
              href="/persona-dashboard"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Persona Dashboard
            </Link>
            <Link
              href="/chatbot"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Interactive Chatbot
            </Link>
            <Link
              href="/blogs"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>

            <div className="pt-4 border-t border-gray-800 flex flex-col space-y-3">
              {isLoggedIn ? (
                <Button
                  variant="ghost"
                  onClick={() => {
                    logout()
                    setIsMenuOpen(false)
                  }}
                  className="justify-center text-white hover:bg-purple-900/30"
                >
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      login()
                      setIsMenuOpen(false)
                    }}
                    className="justify-center text-white hover:bg-purple-900/30"
                  >
                    Login
                  </Button>
                  <Button
                    className="justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
