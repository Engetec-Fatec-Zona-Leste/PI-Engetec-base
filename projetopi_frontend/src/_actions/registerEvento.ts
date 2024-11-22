'use server';

import baseURL from './configUrl';

export const registerEvento = async (formData: FormData, files: any) => {
    try {
        const response = await baseURL.post(`/evento`, {
            nome: formData.get('nome'),
            descricao: formData.get('descricao'),
            assuntoPrincipal: formData.get('assuntoPrincipal'),
            emailEvento: formData.get('emailEvento'),
            publico: formData.get('publico'),
            proceedings: formData.get('proceedings'),
            certificados: formData.get('certificados'),
            formato: formData.get('formato'),
            logo: files.logo ? files.logo[0].path : null,
        });

        console.log('Evento cadastrado', response.data);
        return { success: true, message: 'Evento cadastrado com sucesso!' };
    } catch (error) {
        console.error('Erro ao cadastrar evento:', error);
        return { success: false, message: 'Erro ao cadastrar o evento.' };
    }
};

