import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { contactsApi } from '../../api/contactsApi'
import ICombinedContactData from '../../interfaces/ICombinedContactData'
import IContact from '../../interfaces/IContact'
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

export const updateContact = createAppAsyncThunk(
    `${namespace}/updateContact`,
    async(dataObject: ICombinedContactData, {dispatch}): Promise<void> => {
        await contactsApi.updateContact(dataObject)
        dispatch(getContacts())
    }
)

export const deleteContact = createAppAsyncThunk(
    `${namespace}/deleteContact`,
    async (id: string | undefined, {dispatch}): Promise<void> => {
        await contactsApi.deleteContact(id)
        dispatch(getContacts())
    }
)

export const createContact = createAppAsyncThunk(
    `${namespace}/createContact`,
    async (contact: IContact, {dispatch}) => {
        await contactsApi.createContact(contact)
        dispatch(getContacts())
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
        .addCase(updateContact.pending, (state: IContactsState) => {
            state.loading = true
        })
        .addCase(updateContact.rejected, (state: IContactsState) => {
            state.loading = false
        })
        .addCase(updateContact.fulfilled, (state: IContactsState) => {
            state.loading = false
        })
        .addCase(deleteContact.pending, (state: IContactsState) => {
            state.loading = true
        })
        .addCase(deleteContact.rejected, (state: IContactsState) => {
            state.loading = false
        })
        .addCase(deleteContact.fulfilled, (state: IContactsState) => {
            state.loading = false
        })
        .addCase(createContact.pending, (state: IContactsState) => {
            state.loading = true
        })
        .addCase(createContact.rejected, (state: IContactsState) => {
            state.loading = false
        })
        .addCase(createContact.fulfilled, (state: IContactsState) => {
            state.loading = false
        })
    }
})

export const {

} = contactsSlice.actions