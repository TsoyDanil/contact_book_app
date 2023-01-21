import IContact from "../../interfaces/IContact";


export default interface IContactBlockProps{
    contact: IContact,
    showContactInfo: React.MouseEventHandler<HTMLDivElement>
}