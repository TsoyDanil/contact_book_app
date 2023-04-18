import { contactInstance } from "./instance"
export const contactsApi = {
    getContacts: async()=> {
        try{
            const response = await contactInstance.get('.json')
            return response.data
        } catch(error){
            console.log(error)
        }
    }
}