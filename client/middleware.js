// import { authMiddleware } from '@clerk/nextjs/server'

// export default authMiddleware({
//   publicRoutes: ["/", "/product-details/(.*)"],
//   publicRoutes: ["/", "/shop/(.*)"],
//   publicRoutes: ["/", "/blog/(.*)"],
//   publicRoutes: ["/", "/about/(.*)"],
//   publicRoutes: ["/", "/contact/(.*)"],
// });


// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     '/(api|trpc)(.*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/product-details/(.*)', '/shop(.*)', '/about(.*)', '/blog(.*)', '/contact(.*)'])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}