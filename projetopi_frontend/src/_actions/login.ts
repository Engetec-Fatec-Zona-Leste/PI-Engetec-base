'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import { createSession } from "@/_actions/sessions"
import baseURL from "./configUrl"
import { redirect } from "next/navigation"

export const login = async (formData: FormData) => {
    baseURL.post(`/auth/login`, {
        email: formData.get('email'),
        senha: formData.get('senha'),
    }).then(res => {
        const { token, role } = res.data
        // const roles = ['Admin', 'Editor', 'Avaliador', 'Autor']
        createSession(token, role)
        redirect('/eventos') // nao sei pra qual rota vai dps
    })


}