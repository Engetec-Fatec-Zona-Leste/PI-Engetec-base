import axios from "axios";

const baseURL = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:3031' : process.env.DEPLOYED_URL,
    headers: {
        "Content-Type": "application/json"
    }
})
export default baseURL