import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Create a route matcher for protected routes
const isProtectedRoute = createRouteMatcher([
  '/persona-dashboard(.*)',
  '/profile(.*)',
  '/blogs/new(.*)'
])

// Create a route matcher for public routes
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/blogs(.*)',
  '/api(.*)'
])
export default clerkMiddleware();
// export default clerkMiddleware((auth, req) => {
//   // If user is not signed in and trying to access a protected route
//   if (!auth.userId && isProtectedRoute(req.nextUrl.pathname)) {
//     const signInUrl = new URL('/sign-in', req.url)
//     signInUrl.searchParams.set('redirect_url', req.url)
//     return NextResponse.redirect(signInUrl)
//   }
  
//   return NextResponse.next()
// })

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}