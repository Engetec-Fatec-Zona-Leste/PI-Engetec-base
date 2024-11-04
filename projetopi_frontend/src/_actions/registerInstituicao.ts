'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import baseURL from "./configUrl"

export const registerInstituicao = async (formData: FormData) => {
    baseURL.post(`/cadastrar/instituicao`, {
        nome: formData.get('nome'), // name do campo no form
        cnpj: formData.get('cnpj'), // name do campo no form
    }).then(res => {
        console.log('instituicao cadastrada', res.data)
    })
}

