// src/_actions/registerInstituicao.ts
'use server';

import baseURL from './configUrl';

export const registerInstituicao = async (formData: FormData) => {
    try {
        const response = await baseURL.post(`/cadastrar/instituicao`, {
            nome: formData.get('nome'),
            cnpj: formData.get('cnpj'),
        });

        console.log('Instituição cadastrada', response.data);
        return { success: true, message: 'Instituição cadastrada com sucesso!' };
    } catch (error) {
        console.error('Erro ao cadastrar instituição:', error);
        return { success: false, message: 'Erro ao cadastrar a instituição.' };
    }
};
