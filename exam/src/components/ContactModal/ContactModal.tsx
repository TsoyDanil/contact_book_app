import React from 'react'
import Backdrop from '../UI/Backdrop/Backdrop'
import IContactModalProps from './IContactModalProps'
import './ContactModal.css'

const ContactModal: React.FunctionComponent<IContactModalProps> = (props): React.ReactElement => {

    return(
        <>
            <Backdrop
                show={props.show}
            />
            <div 
                className="ContactModal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                <div className="ContactData">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default ContactModal