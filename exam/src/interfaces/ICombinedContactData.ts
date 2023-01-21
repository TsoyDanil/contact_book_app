import IContact from "./IContact";

export default interface ICombinedContactData{
    id: string | undefined,
    contactData: IContact
}