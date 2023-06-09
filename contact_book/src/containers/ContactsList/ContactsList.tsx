import React, { useState } from "react";
import { AppState, useAppDispatch } from "../../store/store";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './ContactsList.css'
import ContactBlock from "../../components/ContactBlock/ContactBlock";
import IContact from "../../interfaces/IContact";
import { deleteContact } from "../../store/contacts/contacts.slice";
import ContactModal from "../../components/ContactModal/ContactModal";
import Loader from "../../components/UI/Loader/Loader";

const ContactsList: React.FunctionComponent = (): React.ReactElement => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const {loading, contacts} =  useSelector((state: AppState) => state.contacts)

    const [showModal, setShowModal] = useState<boolean>(false)

    const [targetedContactId, setTargetedContactId] = useState<string>('')

    const [targetedContact, setTargetedContact] = useState<IContact>({} as IContact)

    const showContactInfo = (contact: IContact, key: string) => {
        setTargetedContact(contact)
        setTargetedContactId(key)
        setShowModal(true)
    }

    const closeContactInfo = () => {
        setShowModal(false)        
        setTargetedContactId('')
        setTargetedContact({} as IContact)
    }

    const deleteContactHandler = () => {
        dispatch(deleteContact(targetedContactId))
        setShowModal(false)
    }

    const editContactHandler = () => {
        setShowModal(false)
        navigate({pathname: targetedContactId + '/edit'})
        setTargetedContactId('')
        setTargetedContact({} as IContact)
    }

    return(
        <div>
            <ContactModal
                show={showModal}
            >   
                <div className="Modal_container">
                    <div className="Modal_image_frame">
                        <img className="Modal_image" src={targetedContact.photoSrc} alt={targetedContact.name + 'profile image'}/>
                    </div>
                    <div className="Modal_container_text_container">
                        <h1>{targetedContact.name}</h1>
                        <p>+{targetedContact.phone}</p>
                        <p>{targetedContact.email}</p>
                        <div>
                            <button 
                                className="Edit_btn"
                                onClick={editContactHandler}
                            ></button>
                            <button 
                                className="Delete_btn"
                                onClick={deleteContactHandler}
                            ></button>
                        </div>
                        <button className="Close_btn" onClick={closeContactInfo}></button>
                    </div>
                </div>
            </ContactModal>
            {
                loading ? 
                <Loader/> :
                <>
                    {
                        Object.keys(contacts).length > 0?
                        Object.keys(contacts).map((key: string) => {
                            return(
                                <ContactBlock
                                    key={key}
                                    contact = {contacts[key]}
                                    showContactInfo = {()=>{showContactInfo(contacts[key], key)}}
                                />
                            )
                        })
                        :
                        <h1>Contacts list is empty</h1>
                    }
                </>
            }
        </div>
    )
}

export default ContactsList