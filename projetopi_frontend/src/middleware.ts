import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/_actions/sessions'

const publicRoutes = ['/', '/cadastro', '/eventos', '/eventos/[idEvento]', '/login', '/logout', '/cadastrar-instituicao', '/dashboard/proceedings',]

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
    '/dashboard/gerenciamento-site/cadastrar-editorchefe',
    '/dashboard/gerenciamento-site/cadastrar-organizador',
    '/dashboard/gerenciamento-site/cadastrar-comissao/[idComissao]',
    '/dashboard/meus-eventos-criados',
    '/dashboard/proceedings',
    '/criar-evento',
    '/criar-evento/[idEvento]',
    '/criar-evento/[idEvento]/arquivos',
    '/criar-evento/[idEvento]/cadastrar-area',
    '/criar-evento/[idEvento]/cadastrar-avaliador',
    '/criar-evento/[idEvento]/cadastrar-editor-chefe',
    '/criar-evento/[idEvento]/cadastrar-organizador',
    '/criar-evento/[idEvento]/data',
    '/criar-evento/[idEvento]/usuarios',
]
const avaliadorRoutes = [
    '/dashboard/avaliar-artigo',
    '/dashboard/avaliar-artigo/[idArquivo]',
    '/dashboard/avaliar-artigo/[idArquivo]/avaliar'
]

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    const isPublicRoute = publicRoutes.some(route => new RegExp(`^${route.replace(/\[.*?\]/g, '[^/]+')}$`).test(path));
    const isAdminRoute = adminRoutes.some(route => new RegExp(`^${route.replace(/\[.*?\]/g, '[^/]+')}$`).test(path));
    const isAvaliadorRoute = avaliadorRoutes.some(route => new RegExp(`^${route.replace(/\[.*?\]/g, '[^/]+')}$`).test(path));

    const cookie = req.cookies.get('session')?.value;
    const session = cookie ? await decrypt(cookie) : null;

    if (!isPublicRoute && !session) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (session && isAdminRoute && !(session.role.includes('Admin'))) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (session && isAvaliadorRoute && !(session.role.includes('Avaliador'))) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/eventos/:path*', '/dashboard/:path*', '/criar-evento/:path*'],
};
