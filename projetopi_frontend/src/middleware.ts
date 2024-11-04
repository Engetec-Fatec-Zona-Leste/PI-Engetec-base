import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/_actions/sessions'

const protectedRoutes = [
    '/dashboard',
    '/dashboard/avaliar-artigo'
]
const publicRoutes = ['/', '/cadastros-publicos', '/criar-evento', '/eventos', '/login']


export default async function middleware(req: NextRequest) {
    // Check if the current route is protected or public
    const path = req.nextUrl.pathname
    // const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = req.cookies.get('session')?.value
    const session = await decrypt(cookie)

    // Redirect to /login if the user is not authenticated
    if (!isPublicRoute && !session) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}