import React, {useRef} from 'react'
import './ContactBlock.css'
import IContactBlockProps from './IContactBlockProps'

const ContactBlock: React.FunctionComponent<IContactBlockProps> = (props): React.ReactElement => {

    const imageRef = useRef<HTMLImageElement>(null)

    const handlerError = () => {
        imageRef!.current!.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5aJdWfJvezmp59gLwc76tpc7VWjOn-ceALA&usqp=CAU'
    }

    return(
        <div onClick={props.showContactInfo} className = "ContactBlock">
            <div className = "ContactBlock_innerContainer">
                <img 
                    className='ContactBlock_image'
                    ref={imageRef}
                    src={props.contact.photoSrc}
                    onError={handlerError}
                    alt={props.contact.name + 'profile_image'}
                />
                <p>{props.contact.name}</p>
            </div>
        </div>
    )
}

export default ContactBlock