import { Search } from "lucide-react"
import Navbar from "@/components/navbar"
import BlogCard from "@/components/blog-card"
import BlogSidebar from "@/components/blog-sidebar"
import { blogPosts } from "@/data/blog-posts"

export const metadata = {
  title: "SoulScript - Mental Health Blog",
  description: "Insights, tips, and stories about mental health, wellness, and personal growth.",
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <BlogSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search and Settings Bar */}
              <div className="flex items-center justify-between mb-6 bg-gray-900 rounded-lg p-2">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles"
                    className="w-full bg-gray-800 border-0 rounded-md pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="ml-2 p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </button>
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
