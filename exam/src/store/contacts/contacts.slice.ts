import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { contactsApi } from '../../api/contactsApi'
import IContactResponse from '../../interfaces/IContactResponse'
import { createAppAsyncThunk } from '../createAppAsyncThunk'
import IContactsState from './IContactsState'

const namespace: string = 'contacts'

export const getContacts = createAppAsyncThunk(
    `${namespace}/getContacts`,
    async (): Promise<IContactResponse | void> => {
        return await contactsApi.getContacts()
    }
)

export const contactsSlice = createSlice({
    name: namespace,
    initialState: {
        contacts: {} as IContactResponse,
        loading: false
    } as IContactsState, 
    reducers: {

    }, 
    extraReducers: builder => {
        builder
        .addCase(getContacts.pending, (state: IContactsState) => {
            state.loading = true
        })
        .addCase(getContacts.rejected, (state: IContactsState) => {
            state.loading = false
        })
        .addCase(getContacts.fulfilled, (state: IContactsState, action: PayloadAction<IContactResponse | void>)=>{
            state.loading = false
            if (action.payload){
                state.contacts = action.payload
            }
        })
    }
})

export const {

} = contactsSlice.actions