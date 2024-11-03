'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import baseURL from "./configUrl"

export const postUserComissao = async (formData: FormData) => {
    await baseURL.post('/path/param', {
        name: formData.get('input-name-for-name') as string
    })

}