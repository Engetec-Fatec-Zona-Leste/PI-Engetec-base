// src/services/instituicoesService.js

import axios from 'axios';
import baseURL from '@/_actions/configUrl'; // Assumindo que você tem a URL base configurada

export const getInstituicoes = async () => {
    try {
        const response = await axios.get(baseURL + '/instituicao');
        
        // Log da resposta completa
        console.log('Resposta da API:', response.data);

        // Aqui você pode adaptar dependendo do formato da resposta
        const instituicoesData = response.data; // A resposta pode ser um objeto ou array

        // Verifica se é um array
        if (Array.isArray(instituicoesData)) {
            const instituicoesOptions = instituicoesData.map(instituicao => ({
                label: instituicao.nome,
                value: instituicao.id,
            }));
            return instituicoesOptions;
        } else {
            console.error("Formato inesperado na resposta da API", instituicoesData);
            throw new Error("Formato inesperado na resposta da API");
        }
    } catch (error) {
        console.error('Erro ao carregar as instituições:', error);
        throw error;
    }
};
