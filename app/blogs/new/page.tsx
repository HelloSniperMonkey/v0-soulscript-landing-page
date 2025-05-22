"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, LinkIcon, Check, Smile, Paperclip } from "lucide-react"
import Navbar from "@/components/navbar"
import BlogSidebar from "@/components/blog-sidebar"
import TagInput from "@/components/tag-input"

export default function NewPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [category, setCategory] = useState("")
  const [activeTab, setActiveTab] = useState("write")
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleThumbnailClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log({ title, content, tags, category, thumbnailPreview })

    // Simulate successful post creation
    setTimeout(() => {
      router.push("/blogs")
    }, 1000)
  }

  const handleAutoSave = () => {
    // Simulate auto-save functionality
    setIsSaved(true)
    setTimeout(() => {
      setIsSaved(false)
    }, 3000)
  }

  const categories = [
    "Mental Health",
    "Therapy",
    "Self-Care",
    "Mindfulness",
    "Anxiety",
    "Depression",
    "Wellness",
    "Technology",
  ]

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
            <div className="flex-1 bg-gray-900 rounded-lg p-6">
              <Tabs defaultValue="post" className="mb-6">
                <TabsList className="bg-gray-800">
                  <TabsTrigger value="post" className="data-[state=active]:bg-gray-700">
                    New post
                  </TabsTrigger>
                  <TabsTrigger value="link" className="data-[state=active]:bg-gray-700">
                    Share a link
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="post" className="mt-4">
                  <form onSubmit={handleSubmit}>
                    {/* Category Selection */}
                    <div className="mb-6">
                      <div className="relative">
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-4 pr-10 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Select Category</option>
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Thumbnail Upload */}
                    <div className="mb-6">
                      <div
                        onClick={handleThumbnailClick}
                        className="flex items-center justify-center bg-gray-800 border border-gray-700 border-dashed rounded-md h-40 cursor-pointer hover:bg-gray-750 transition-colors"
                      >
                        {thumbnailPreview ? (
                          <div className="relative w-full h-full">
                            <img
                              src={thumbnailPreview || "/placeholder.svg"}
                              alt="Thumbnail preview"
                              className="w-full h-full object-cover rounded-md"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                              <p className="text-white text-sm">Change thumbnail</p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center">
                            <ImageIcon className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-400 text-sm">Thumbnail</p>
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleThumbnailChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>

                    {/* Title Input */}
                    <div className="mb-6">
                      <div className="relative">
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Post Title*"
                          className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          maxLength={250}
                        />
                        <div className="absolute right-3 bottom-3 text-xs text-gray-400">{title.length}/250</div>
                      </div>
                    </div>

                    {/* Tags Input */}
                    <div className="mb-6">
                      <TagInput tags={tags} setTags={setTags} />
                    </div>

                    {/* Content Editor */}
                    <div className="mb-6">
                      <div className="bg-gray-800 border border-gray-700 rounded-md overflow-hidden">
                        <div className="flex border-b border-gray-700">
                          <button
                            type="button"
                            onClick={() => setActiveTab("write")}
                            className={`flex-1 py-2 px-4 text-center ${
                              activeTab === "write" ? "bg-gray-700 text-white" : "text-gray-400"
                            }`}
                          >
                            Write
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveTab("preview")}
                            className={`flex-1 py-2 px-4 text-center ${
                              activeTab === "preview" ? "bg-gray-700 text-white" : "text-gray-400"
                            }`}
                          >
                            Preview
                          </button>
                          <div className="flex items-center px-4">
                            {isSaved && (
                              <div className="flex items-center text-green-400 text-xs">
                                <Check className="h-3 w-3 mr-1" />
                                Saved
                              </div>
                            )}
                          </div>
                        </div>

                        {activeTab === "write" ? (
                          <div className="relative">
                            <textarea
                              value={content}
                              onChange={(e) => {
                                setContent(e.target.value)
                                handleAutoSave()
                              }}
                              placeholder="Share your thoughts"
                              className="w-full bg-gray-800 p-4 text-white placeholder-gray-400 focus:outline-none min-h-[300px] resize-y"
                              maxLength={10000}
                            ></textarea>
                            <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                              {content.length}/10000
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 min-h-[300px] prose prose-invert max-w-none">
                            {content ? (
                              <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br />") }} />
                            ) : (
                              <p className="text-gray-400">Nothing to preview</p>
                            )}
                          </div>
                        )}

                        <div className="flex items-center justify-between p-2 border-t border-gray-700">
                          <div className="flex space-x-2">
                            <button
                              type="button"
                              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
                            >
                              <Paperclip className="h-5 w-5" />
                            </button>
                            <button
                              type="button"
                              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
                            >
                              <LinkIcon className="h-5 w-5" />
                            </button>
                            <button
                              type="button"
                              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
                            >
                              <Smile className="h-5 w-5" />
                            </button>
                          </div>
                          <div className="text-xs text-gray-400">Attach images by dragging & dropping</div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8"
                      >
                        Post
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="link" className="mt-4">
                  <div className="bg-gray-800 border border-gray-700 rounded-md p-6 text-center">
                    <LinkIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Share a link</h3>
                    <p className="text-gray-400 mb-4">
                      Paste a link to an article, video, or any other content you want to share
                    </p>
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="https://"
                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8">
                      Fetch & Share
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
