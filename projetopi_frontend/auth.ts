import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import baseURL from "./src/actions/configUrl"
import { cookies } from 'next/headers'
import axios from 'axios'
import { redirect } from 'next/navigation'


type ReturnedUser = {
    email: string,
    name: string,
    password: string
}

const useUserDTO = (user: ReturnedUser) => {
    return {
        name: user.name,
        email: user.email
    }
}

type SessionPayload = {
    userId: string,
    expiresAt: Date,
    role: string
}


const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}
export async function encryptPassword(password: string) {
    return new SignJWT({ password })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}

export async function decryptPassword(hashpassword: string) {
    try {
        const { payload } = await jwtVerify(hashpassword, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload
    } catch (error) {
        console.log('Failed to verify session')
    }
}
export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload
    } catch (error) {
        console.log('Failed to verify session')
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
            secure: true,
            expires: expiresAt,
            sameSite: 'lax',
            path: '/',
        }
    )
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
    const cookieStore = await cookies()
    cookieStore.delete('session')
}

export async function logout() {
    deleteSession()
    redirect('/login')
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
                role: {},
            },
            authorize: async (credentials) => {

                const pwHash = await encryptPassword(credentials?.password as string)

                let res = await baseURL.post('/auth/login', {
                    email: credentials.email,
                    senha: pwHash
                })

                if (!res.data) {
                    // No user found, so this is their first attempt to login
                    // Optionally, this is also the place you could do a user registration
                    throw new Error("Invalid credentials.")
                }

                await createSession(res.data.id, res.data.role);

                // return user object with their profile data
                return useUserDTO(res.data as ReturnedUser)
            },
        }),
    ],
})



export async function signup(formData: FormData) {
    await axios.post('/auth/register/user', {
        email: formData.get('email'),
        nome: formData.get('nome'),
        senha: formData.get('senha'),
        cpf: formData.get('cpf'),
        periodo: formData.get('periodo'),
        apresentador: formData.get('apresentador'),
        curso: formData.get('curso'),
        instituicao: formData.get('instituicao')
    })

    redirect('/login')
}