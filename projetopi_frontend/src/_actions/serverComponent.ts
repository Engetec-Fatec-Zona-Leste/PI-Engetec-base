// ServerComponent.tsx
'use server';

import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function getSession() {
    const session = cookies().get('session')?.value;
    if (session) {
        const { payload } = await jwtVerify(session, new TextEncoder().encode(process.env.JWT_SECRET), {
            algorithms: ['HS256'],
        });
        return payload;
    }
    return null;
}
