import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

type SessionPayload = {
    userId: string;
    expiresAt: Date | string; // Aceita `Date` ou string ISO
    role: string;
};

const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
    throw new Error('JWT_SECRET não definido no ambiente');
}
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
    const expiresAt = Math.floor(
        (payload.expiresAt instanceof Date ? payload.expiresAt.getTime() : new Date(payload.expiresAt).getTime()) / 1000
    );

    return new SignJWT({ userId: payload.userId, role: payload.role, expiresAt })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(expiresAt)
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

        // Validação das propriedades do payload
        if (!payload.userId || !payload.role || !payload.expiresAt) {
            throw new Error('Payload inválido');
        }

        // Convertendo expiresAt para timestamp
        const expiresAtRaw = payload.expiresAt;
        const expiresAt = typeof expiresAtRaw === 'string' || expiresAtRaw instanceof Date
            ? new Date(expiresAtRaw).getTime() / 1000
            : expiresAtRaw;

        if (typeof expiresAt !== 'number' || Date.now() / 1000 > expiresAt) {
            throw new Error('Session expirou');
        }

        return payload as { userId: string; role: string; expiresAt: number };
    } catch (error) {
        console.error('Erro ao verificar sessão:', error);
        throw new Error('Falha ao verificar a sessão');
    }
}

export async function createSession(userId: string, role: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const session = await encrypt({ userId, expiresAt, role });

    cookies().set('session', session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });

    console.log('Session cookie set:', session);
}

export async function updateSession() {
    const session = cookies().get('session')?.value;

    if (!session) {
        return null;
    }

    try {
        const payload = await decrypt(session);

        // Atualiza expiração
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        const updatedSession = await encrypt({
            userId: payload.userId,
            role: payload.role,
            expiresAt,
        });

        cookies().set('session', updatedSession, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            expires: expiresAt,
            sameSite: 'lax',
            path: '/',
        });

        console.log('Session cookie updated:', updatedSession);
    } catch (error) {
        console.error('Erro ao atualizar a sessão:', error);
        return null;
    }
}

export async function deleteSession() {
    cookies().delete('session');
    console.log('Session cookie deleted');
}

export async function logout() {
    deleteSession();
}
