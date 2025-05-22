import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Heart, MessageSquare, Bookmark, Share2 } from "lucide-react"
import Navbar from "@/components/navbar"
import { blogPosts } from "@/data/blog-posts"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found - SoulScript",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - SoulScript Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blogs" className="inline-flex items-center text-gray-400 hover:text-purple-400 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to blogs
          </Link>

          <article>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

              <div className="flex items-center mb-6">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-400">
                    {post.date} · {post.readTime} min read
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded hover:bg-purple-900/30 hover:text-purple-300 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-invert prose-purple max-w-none">
                <p className="text-lg text-gray-300 mb-6">{post.excerpt}</p>
                <p className="text-gray-300 mb-4">
                  Cognitive Behavioral Therapy (CBT) is one of the most widely used and effective forms of
                  psychotherapy. It focuses on identifying and changing negative thought patterns that can lead to
                  harmful behaviors and emotional distress.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">How CBT Works</h2>
                <p className="text-gray-300 mb-4">
                  CBT is based on the idea that our thoughts, feelings, and behaviors are interconnected. By changing
                  one aspect, we can positively influence the others. The therapy typically involves:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-300">
                  <li className="mb-2">Identifying problematic thought patterns</li>
                  <li className="mb-2">Challenging negative beliefs</li>
                  <li className="mb-2">Learning coping strategies</li>
                  <li className="mb-2">Practicing new behaviors</li>
                </ul>
                <p className="text-gray-300 mb-4">
                  Through regular sessions with a therapist and homework assignments, individuals learn to recognize
                  distorted thinking and develop healthier thought patterns.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Benefits of CBT</h2>
                <p className="text-gray-300 mb-4">
                  Research has shown that CBT can be effective for a wide range of mental health conditions, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-300">
                  <li className="mb-2">Depression</li>
                  <li className="mb-2">Anxiety disorders</li>
                  <li className="mb-2">Post-traumatic stress disorder (PTSD)</li>
                  <li className="mb-2">Obsessive-compulsive disorder (OCD)</li>
                  <li className="mb-2">Eating disorders</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 mt-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                    <MessageSquare className="h-5 w-5" />
                    <span>{post.comments}</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
