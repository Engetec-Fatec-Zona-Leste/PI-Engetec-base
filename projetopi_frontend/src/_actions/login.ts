'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import { createSession } from "@/_actions/sessions"
import baseURL from "./configUrl"
import { redirect } from "next/navigation"

export const login = async (formData: FormData) => {
    baseURL.post(`/auth/login`, {
        email: formData.get('email'), // name do campo no form
        senha: formData.get('senha'), // name do campo no form
    }).then(res => {
        const { token, role } = res.data
        // const roles = ['Admin', 'Editor', 'Avaliador', 'Autor']
        console.log(token, role)
        createSession(token, role ? role : ['Autor'])
        if (role == 'Admin') {
            redirect('/dashboard/meus-eventos-criados')
        }
        if (role == 'Avaliador') {
            redirect('/dashboard/avaliar-artigo')
        }
        redirect('/eventos') // nao sei pra qual rota vai dps
    })
}