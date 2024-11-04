'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import { deleteSession } from "@/_actions/sessions"

export const logout = async () => {
    try {
        await deleteSession()
        localStorage.getItem('authenticated') === 'true'
        return { success: true, message: 'Logout feito com sucesso!' };
    } catch (error) {
        return { success: false, message: 'Erro ao fazer o login!' };
    }
}
