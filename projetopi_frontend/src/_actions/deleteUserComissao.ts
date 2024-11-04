'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import baseURL from "./configUrl"

export const deleteUserComissao = async (id: string) => {
    await baseURL.delete(`/path/param/${id}`)

}