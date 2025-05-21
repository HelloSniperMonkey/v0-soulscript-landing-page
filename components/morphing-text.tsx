"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const phrases = [
  "Accessible therapy for everyone.",
  "AI-powered mental health support.",
  "Bridge the gap to professional help.",
  "Confidential, judgment-free conversations.",
  "Your journey to better mental health.",
]

export default function MorphingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-12 flex items-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-purple-300"
        >
          {phrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
