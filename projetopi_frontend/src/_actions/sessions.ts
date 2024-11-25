import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type SessionPayload = {
    userId: string,
    expiresAt: Date,
    role: string
}


const secretKey = process.env.JWT_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: SessionPayload) {
    const expiresAt = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60; // Timestamp em segundos
    return new SignJWT({ ...payload, expiresAt })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(expiresAt) // Define a expiração no token
        .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
    if (!session) {
        throw new Error('Token não encontrado');
    }

    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        });

        if (Date.now() / 1000 > payload.expiresAt) {
            throw new Error('Session expirou');
        }

        return payload;
    } catch (error) {
        console.error('Erro ao verificar sessão:', error);
        throw new Error('Falha ao verificar a sessão');
        console.log('Session Token:', session);

    }
}

export async function createSession(userId: string, role: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ userId, expiresAt, role })

    cookies().set(
        'session',
        session,
        {
            httpOnly: true,
            secure: false,  // Use true apenas em produção e com HTTPS
            expires: expiresAt,
            sameSite: 'lax', // Melhor compatibilidade
            path: '/',       // Torna o cookie acessível em toda a aplicação
        }
    )
    console.log('Session cookie set:', session);
}

export async function updateSession() {
    const session = (await cookies()).get('session')?.value
    const payload = await decrypt(session)

    if (!session || !payload) {
        return null
    }

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    const cookieStore = await cookies()
    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/',
    })
}

export async function deleteSession() {
    await cookies().delete('session')
}

export async function logout() {
    deleteSession()
}