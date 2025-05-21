import type { ReactNode } from "react"
import { Check } from "lucide-react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
}

export default function FeatureCard({ icon, title, description, features }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-8 border border-purple-900/30 hover:border-purple-500/50 transition-all group">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-gray-800 rounded-lg mr-4 group-hover:bg-purple-900/20 transition-colors">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
