import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Let's enforce auth for dashboard routes explicitly instead of broadly
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)', 
  '/clean-room(.*)', 
  '/activations(.*)', 
  '/analytics(.*)', 
  '/models(.*)', 
  '/settings(.*)', 
  '/health(.*)', 
  '/compliance(.*)', 
  '/audit-logs(.*)', 
  '/governance(.*)', 
  '/data-sources(.*)', 
  '/team(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
      await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
