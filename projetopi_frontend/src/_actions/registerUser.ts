'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import { redirect } from "next/navigation"
import baseURL from "./configUrl"

export const registerUser = async (formData: FormData) => {
    baseURL.post(`/auth/register/user`, {
        email: formData.get('email'),
        nome: formData.get('nome'),
        senha: formData.get('senha'),
        cpf: formData.get('cpf'),
        periodo: formData.get('periodo'),
        apresentador: formData.get('apresentador'),
        curso: formData.get('curso'),
        instituicao: formData.get('instituicao'),
    })

    redirect('/login')
    // console.log({
    //     email: formData.get('email'),
    //     nome: formData.get('nome'),
    //     senha: formData.get('senha'),
    //     cpf: formData.get('cpf'),
    //     periodo: formData.get('periodo'),
    //     apresentador: formData.get('apresentador'),
    //     curso: formData.get('curso'),
    //     instituicao: formData.get('instituicao'),
    // })

}

