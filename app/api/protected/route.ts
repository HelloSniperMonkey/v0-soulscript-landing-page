import { getAuth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req)
  
  if (!userId) {
    return new NextResponse(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401, headers: { "content-type": "application/json" } }
    )
  }
  
  // Return user data or protected information
  return NextResponse.json({
    message: "This is protected data!",
    userId,
    timestamp: new Date().toISOString(),
  })
}
