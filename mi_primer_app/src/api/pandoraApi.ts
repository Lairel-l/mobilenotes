import axios from "axios";

export const pandoraApi = axios.create({
    baseURL: "http://192.168.143.172:3000" 
});
