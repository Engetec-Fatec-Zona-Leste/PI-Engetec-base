import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import axios from 'axios';

type User = {
    email: string
    password: string
}

async function getUser(email: string): Promise<User | undefined> {
    try {
        // const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
        const response = await axios.get('https://', {
            data: {
                email
            }
        });
        const user : User | undefined = response.data
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    secret: process.env.AUTH_SECRET,
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                    // const passwordsMatch = await bcrypt.compare(password, user.password);
                    const passwordsMatch = password === user.password ? true : false;
                    if (passwordsMatch) return user;
                }
                console.log('Invalid credentials');
                return null;
            }
        })
    ]
});