import IContactResponse from "../interfaces/IContactResponse";
import {AxiosResponse} from 'axios'
import { contactsInstance } from "./instances";
import ICombinedContactData from "../interfaces/ICombinedContactData";
import IContact from "../interfaces/IContact";

class ContactsApi {
    public getContacts = async(): Promise<IContactResponse | void> => {
        try{
            const response: AxiosResponse<IContactResponse | void> = await contactsInstance.get('.json')
            return response.data 
        } catch(error: unknown){
            console.log(error)
        }
    }

    public updateContact = async (dataObject: ICombinedContactData) => {
        try{
            await contactsInstance.put('/' + dataObject.id + '.json', dataObject.contactData)
        } catch(error: unknown){
            console.log(error)
        }
    }

    public createContact = async (contact: IContact) => {
        try{
            await contactsInstance.post('.json', contact)
        } catch(error: unknown){
            console.log(error)
        }
    }

    public deleteContact = async(id: string | undefined) => {
        try{
            await contactsInstance.delete('/' + id + '.json' )
        }
        catch(error:unknown){
            console.log(error)
        }
    }
}

export const contactsApi = new ContactsApi()