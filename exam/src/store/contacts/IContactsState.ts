import IContactResponse from "../../interfaces/IContactResponse";


export default interface IContactsState{
    contacts: IContactResponse,
    loading: boolean
}