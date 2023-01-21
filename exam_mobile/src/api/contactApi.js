import { contactsInstance } from "./instances"

export const contactsApi = {
    getContacts: async()=> {
        try{
            const response = await contactsInstance.get('.json')
            return response.data
        } catch(error){
            console.log(error)
        }
    }
}