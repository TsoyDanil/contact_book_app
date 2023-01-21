import axios from "axios";
import { AxiosInstance } from "axios";
import { apiUrl } from "./apiUrl";


export const contactsInstance :AxiosInstance = axios.create({
    baseURL: apiUrl + 'contacts'
})