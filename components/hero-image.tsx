"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function HeroImage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.9,
        }}
        transition={{ duration: 0.5 }}
        className="relative bg-gray-900 rounded-lg p-4 border border-purple-500/30"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400">SoulScript AI</div>
        </div>

        <div className="space-y-4 mb-4">
          <div className="flex justify-end">
            <div className="bg-purple-900/30 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">
                I've been feeling overwhelmed lately with work and personal life. It's hard to find balance.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">
                I understand how challenging it can be to balance multiple responsibilities. It's common to feel
                overwhelmed when trying to manage everything at once. Would you like to explore some strategies that
                might help you find more balance?
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-purple-900/30 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">
                Yes, that would be helpful. I feel like I'm always putting out fires and never have time for myself.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">
                That's a common feeling when we're overwhelmed. Let's start with something simple: could you identify
                one small activity that brings you joy or peace that you could schedule for yourself this week? Even 15
                minutes can make a difference.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full bg-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
