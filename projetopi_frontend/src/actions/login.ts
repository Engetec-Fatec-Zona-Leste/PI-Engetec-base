'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import { createSession } from "@/actions/sessions"
import baseURL from "./configUrl"

export const login = async (formData: FormData) => {
    const res = await baseURL.post(`/auth/login`, {
        email: formData.get('email'),
        senha: formData.get('senha'),
    })

    const token = res.data
    const roles = ['Admin', 'Editor', 'Avaliador', 'Autor']
    createSession(token, roles[0])

}