import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/_actions/sessions'

const publicRoutes = ['/', '/cadastros-publicos', '/criar-evento', '/eventos', '/login', '/logout']

const adminRoutes = [
    '/dashboard/gerenciamento-avaliacoes',
    '/dashboard/gerenciamento-avaliacoes/[idEvento]',
    '/dashboard/gerenciamento-avaliacoes/[idEvento]/[idArquivo]',
    '/dashboard/gerenciamento-avaliacoes/[idEvento]/[idArquivo]/artigo',
    '/dashboard/gerenciamento-avaliacoes/[idEvento]/[idArquivo]/avaliacoes',
    '/dashboard/gerenciamento-avaliacoes/[idEvento]/[idArquivo]/avaliacoes/',
    '/dashboard/gerenciamento-avaliacoes/[idEvento]/[idArquivo]/avaliacoes/[idAvaliacao]',
    '/dashboard/gerenciamento-avaliacoes/[idEvento]/[idArquivo]/mudar-avaliadores',
    '/dashboard/gerenciamento-site/cadastrar-admin',
    '/dashboard/gerenciamento-site/cadastrar-instituicao',
    '/dashboard/gerenciamento-site/cadastrar-area/',
    '/dashboard/gerenciamento-site/cadastrar-comissao',
    '/dashboard/gerenciamento-site/cadastrar-comissao/[idComissao]',
    '/dashboard/meus-eventos-criados',
]
const avaliadorRoutes = [
    '/dashboard/avaliar-artigo'
]

export default async function middleware(req: NextRequest) {
    // Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const isAdminRoute = adminRoutes.includes(path)
    const isAvaliadorRoute = avaliadorRoutes.includes(path)

    const cookie = req.cookies.get('session')?.value
    const session = await decrypt(cookie)

    // Redirect to /login if the user is not authenticated
    if (!isPublicRoute && !session) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if (session && isAdminRoute && !(session.role.includes('Admin'))) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if (session && isAvaliadorRoute && !(session.role.includes('Avaliador'))) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}