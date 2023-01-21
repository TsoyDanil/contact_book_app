import axios from "axios";
import { apiUrl } from "./apiUrl";


export const contactInstance = axios.create({
    baseURL: apiUrl + 'contacts'
})