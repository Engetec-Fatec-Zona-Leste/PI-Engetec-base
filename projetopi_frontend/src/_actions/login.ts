'use server' // just use for user actions that are called for do POST, UPDATE and DELETE forms fields
import { createSession } from "@/_actions/sessions"
import baseURL from "./configUrl"

export const login = async (formData: FormData) => {
    try {
        const res = await baseURL.post(`/auth/login`, {
            email: formData.get('email'),
            senha: formData.get('senha'),
        });

        // Atualizado para usar "usercargo" no lugar de "role"
        const { token, usercargo } = res.data;

        // Cria a sessão com valores padrão caso "usercargo" seja indefinido
        await createSession(token, usercargo ? usercargo : ['Autor']);
        return { success: true, message: 'Login feito com sucesso!', usercargo };
    } catch (error) {
        return { success: false, message: 'Erro ao fazer o login!' }; // Corrigido "error: false" para "success: false"
    }
};
