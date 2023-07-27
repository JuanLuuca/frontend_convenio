import axios from "axios";

export const apiConvenio = axios.create({
    baseURL: 'http://localhost:3020'
});