import { Button } from "@/components/ui/button"
import { ChevronRight, MessageSquare, Shield, Sparkles, BookOpen } from "lucide-react"
import MorphingText from "@/components/morphing-text"
import FeatureCard from "@/components/feature-card"
import HeroImage from "@/components/hero-image"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1 bg-purple-900/30 rounded-full border border-purple-500/30 mb-4">
                <p className="text-sm font-medium text-purple-300">AI-Powered Therapy</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500">
                SoulScript
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-300">
                Accessible therapy through AI, bridging the gap when traditional therapy feels out of reach.
              </p>
              <div className="pt-4">
                <MorphingText />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                >
                  Get Started Free
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500/50 text-white hover:bg-purple-900/20">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Mental Wellness Platform</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              SoulScript combines AI technology with human expertise to provide accessible mental health support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-purple-400" />}
              title="Journal App"
              description="A modern journaling application with rich text editing and personal reflection features."
              features={[
                "Rich text editing",
                "Personal reflection tools",
                "Modern UI with dark/light mode",
                "Responsive design",
                "MongoDB integration",
              ]}
            />

            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-pink-400" />}
              title="Persona Dashboard"
              description="An AI-powered dashboard for managing and interacting with different personas."
              features={[
                "AI-powered persona management",
                "Interactive visualizations",
                "Real-time updates",
                "Markdown support",
                "Stack AI integration",
              ]}
            />

            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-blue-400" />}
              title="Interactive Chatbot"
              description="A conversational interface for persona interactions."
              features={[
                "Natural language processing",
                "Context-aware responses",
                "Multi-persona support",
                "Gemini AI integration",
                "Real-time chat capabilities",
              ]}
            />

            <FeatureCard
              icon={<Shield className="h-8 w-8 text-green-400" />}
              title="NVIDIA Guardrail"
              description="Safety and monitoring components for AI interactions."
              features={[
                "AI safety monitoring",
                "Content filtering",
                "Usage analytics",
                "Email notifications",
                "Rate limiting",
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How SoulScript Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bridging the gap between AI assistance and professional therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-purple-900/30 hover:border-purple-500/50 transition-all">
              <div className="bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AI-Powered Conversations</h3>
              <p className="text-gray-400">
                Engage with our RAG-based Deep-Learning AI chatbot for immediate support and guidance.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-purple-900/30 hover:border-purple-500/50 transition-all">
              <div className="bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Oversight</h3>
              <p className="text-gray-400">
                Licensed therapists review conversations to ensure quality support and identify when more help is
                needed.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-purple-900/30 hover:border-purple-500/50 transition-all">
              <div className="bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Transition</h3>
              <p className="text-gray-400">
                Easily transition to traditional therapy sessions with our network of professionals when you're ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              SoulScript has helped thousands of people on their mental health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-purple-900/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 mr-4"></div>
                <div>
                  <h4 className="font-medium">Alex T.</h4>
                  <p className="text-sm text-gray-400">Using SoulScript for 6 months</p>
                </div>
              </div>
              <p className="text-gray-300">
                "SoulScript helped me open up about issues I was too embarrassed to discuss with anyone else. The
                transition to a real therapist was smooth when I was ready."
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-purple-900/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-600 mr-4"></div>
                <div>
                  <h4 className="font-medium">Jamie K.</h4>
                  <p className="text-sm text-gray-400">Using SoulScript for 3 months</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The journaling features combined with AI feedback have given me insights about myself I never realized.
                It's like having a therapist available 24/7."
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-purple-900/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 mr-4"></div>
                <div>
                  <h4 className="font-medium">Sam R.</h4>
                  <p className="text-sm text-gray-400">Using SoulScript for 1 year</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As someone who couldn't afford weekly therapy, SoulScript has been a lifesaver. The AI is surprisingly
                insightful, and knowing real therapists review the conversations gives me confidence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Choose the plan that works for your needs and budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-8 border border-purple-900/30 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-gray-400 mb-6">For those just starting their journey</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>AI Chatbot Access</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>Basic Journaling</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>Weekly AI Insights</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Get Started</Button>
            </div>

            <div className="bg-gradient-to-b from-purple-900/20 to-black rounded-xl p-8 border border-purple-500/50 transform md:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-gray-400 mb-6">Enhanced support and features</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>Unlimited AI Conversations</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>Advanced Journaling Tools</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>Persona Dashboard</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>Monthly Therapist Review</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Get Started
              </Button>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-purple-900/30 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-gray-400 mb-6">Complete therapy integration</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>All Premium Features</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>2 Video Therapy Sessions</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>Priority Therapist Review</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                  <span>Personalized Growth Plan</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Healing Journey Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands who have found support, insight, and growth with SoulScript.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
              >
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-white hover:bg-purple-900/20">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SoulScript</h3>
              <p className="text-gray-400">
                Making mental health support accessible to everyone through AI and human expertise.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    HIPAA Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} SoulScript. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
