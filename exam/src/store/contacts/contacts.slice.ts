import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import IContactResponse from '../../interfaces/IContactResponse'
import IContactsState from './IContactsState'

const namespace: string = 'contacts'

export const contactsSlice = createSlice({
    name: namespace,
    initialState: {
        contacts: {} as IContactResponse,
        loading: false
    } as IContactsState, 
    reducers: {

    }, 
    extraReducers: {

    }
})

export const {

} = contactsSlice.actions