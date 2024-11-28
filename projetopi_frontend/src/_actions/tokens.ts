import axios from 'axios';
import Cookies from 'js-cookie';
import baseURL from '@/_actions/configUrl';

// Função para pegar o token do cookie
export function getToken() {
    const token = Cookies.get('session'); // Acessa o cookie 'session'
    
    if (!token) {
        console.log("Erro: Token não encontrado");
        return null; // Retorna null ou um valor padrão, dependendo do que você precisa
    }

    return token; // Retorna o token encontrado
}

export default getToken;
