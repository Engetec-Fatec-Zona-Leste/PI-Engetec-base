'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import { redirect } from "next/navigation"
import baseURL from "./configUrl"

export const registerUser = async (formData: FormData) => {
    baseURL.post(`/auth/register/user`, {
        email: formData.get('email'), // name do campo no form
        nome: formData.get('nome'), // name do campo no form
        senha: formData.get('senha'), // name do campo no form
        cpf: formData.get('cpf'), // name do campo no form
        periodo: formData.get('periodo'), // name do campo no form
        apresentador: false, // name do campo no form
        curso: formData.get('curso'), // name do campo no form
        instituicao: formData.get('instituicao'), // name do campo no form
    }).then(res => {
        console.log('cadastro feito: ', res.data)
    })
    // redirect('/login')
}

