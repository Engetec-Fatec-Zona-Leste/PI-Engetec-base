'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import { createSession } from "@/_actions/sessions"
import baseURL from "./configUrl"

export const login = async (formData: FormData) => {
    try {
        const res = await baseURL.post(`/auth/login`, {
            email: formData.get('email'), // name do campo no form
            senha: formData.get('senha'), // name do campo no form
        })
        const { token, role } = res.data //roles = ['Admin', 'Editor', 'Avaliador', 'Autor']
        await createSession(token, role ? role : ['Autor'])
        return { success: true, message: 'Login feito com sucesso!', role };
    } catch (error) {
        return { success: false, message: 'Erro ao fazer o login!' };
    }
}