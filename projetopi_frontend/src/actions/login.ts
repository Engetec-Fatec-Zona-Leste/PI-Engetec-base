'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import baseURL from "./configUrl"

export const login = async (formData: FormData) => {
    const res = await baseURL.post(`/login`, {
        email: formData.get('email'),
        senha: formData.get('password'),
    })

    const token = res.data


}