import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import IContact from '../../interfaces/IContact';
import { AppState, useAppDispatch } from '../../store/store'
import { useParams, useNavigate } from 'react-router-dom';
import './Form.css'
import { createContact, getContacts, updateContact } from '../../store/contacts/contacts.slice';
import Loader from '../../components/UI/Loader/Loader';

const Form: React.FunctionComponent = (): React.ReactElement => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const params = useParams()

    const {loading, contacts} = useSelector((state: AppState) => state.contacts)

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

    const [contact, setContact] = useState<IContact>(
        {
            name: '',
            email: '',
            phone: null,
            photoSrc: ''
        }
    )

    const checkButton = (): void => {
        if (contact?.name.trim() === '' || contact?.email.trim() === '' || contact?.phone === null){
            setButtonDisabled(true)
            return
        }
        setButtonDisabled(false)
    }

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setContact(prevState => {
            return {...prevState, [name]: value}
        })
    }

    const goBack = () => {
        navigate(-1)
    }

    const submitData = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (params.key !== undefined){
            dispatch(updateContact({id: params.key, contactData: contact}))
        } else{
            dispatch(createContact(contact))
        }
    }

    useEffect(()=>{
        checkButton()
    },[contact])

    useEffect(() => {
        if (params.key) {
            if (contacts[params.key] !== undefined){
                setContact(contacts[params.key])
            }
        } else if (params.key === undefined){
            setContact({
                name: '',
                email: '',
                phone: null,
                photoSrc: ''
            })
        }
    }, [contacts, params.key])
    return(
        <div className='Form'>
            {
                loading ?
                <Loader/> :
                <>
                <form onSubmit={(event)=>{submitData(event)}}>
                    <div className='Form_inner_block'>
                        <p>Name</p>
                        <input value={contact?.name} type={'text'} placeholder={'Name...'} name={'name'} onChange={(event)=>{inputHandler(event)}}/>
                    </div>
                    <div className='Form_inner_block'>
                        <p>Phone</p>
                        <input value={contact?.phone !== null ? contact?.phone : ''} type={'number'} placeholder={'Phone...'} name={'phone'} onChange={(event)=>{inputHandler(event)}}/>
                    </div>
                    <div className='Form_inner_block'>
                        <p>Email</p>
                        <input value={contact?.email} type={'email'} placeholder={'Email...'} name={'email'} onChange={(event)=>{inputHandler(event)}}/>
                    </div>
                    <div className='Form_inner_block'>
                        <p>Image</p>
                        <input value={contact?.photoSrc} type={'text'} placeholder={'Image...'} name={'photoSrc'} onChange={(event)=>{inputHandler(event)}}/>
                    </div>
                    <img 
                        src={contact?.photoSrc.trim() !== '' ? contact?.photoSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5aJdWfJvezmp59gLwc76tpc7VWjOn-ceALA&usqp=CAU'} alt={contact?.name + 'profile_image'}
                    />
                    <button
                        className='Submit_btn'
                        disabled  ={buttonDisabled}
                    >
                        {
                            params.key !== undefined ? 'Save Changes' : 'Add To Contacts'
                        }
                    </button>
                </form>
                <button className='GoBack_btn' onClick={goBack}>Go Back</button>
                </>
            }
        </div>
    )
}

export default Form