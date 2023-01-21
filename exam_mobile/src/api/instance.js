import axios from "axios";
import { apiUrl } from "./apiUrl";


export const contactsInstance = axios.create({
    baseURL: apiUrl + 'contacts'
})