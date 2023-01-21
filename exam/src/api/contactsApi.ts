import IContactResponse from "../interfaces/IContactResponse";
import {AxiosResponse} from 'axios'
import { contactsInstance } from "./instances";

class ContactsApi {
    public getContacts = async(): Promise<IContactResponse | void> => {
        try{
            const response: AxiosResponse<IContactResponse | void> = await contactsInstance.get('.json')
            return response.data 
        } catch(error: unknown){
            console.log(error)
        }
    }
}

export const contactsApi = new ContactsApi()