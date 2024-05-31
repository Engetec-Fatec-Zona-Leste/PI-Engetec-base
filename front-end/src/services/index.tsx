import axios from "axios";

const publicApi = axios.create({
    baseURL: '',
    data: JSON,
    headers: {
        Authorization: ''
    }
})

export default publicApi;