'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import baseURL from "./configUrl"

export const updateUserComissao = async (formData: FormData) => {
    await baseURL.put('/path/param', {
        name: formData.get('input-name-for-name') as string
    })

}