import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactsApi } from "../api/contactApi";


const namespace = 'contacts'

export const getContacts = createAsyncThunk(
    `${namespace}/getContacts`,
    async () => {
        return await contactsApi.getContacts()
    }
)

export const contactsSlice = createSlice({
    name: namespace,
    initialState: {
        loading: false,
        contacts: {},
        targetedContact:{}
    },
    reducers: {
        targetContact(state, action){
            try{
                state.targetedContact = action.payload
            } catch(error){
                console.log(error)
            }
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getContacts.pending, (state) => {
            state.loading = true
        })
        .addCase(getContacts.rejected, (state) => {
            state.loading = false
        })
        .addCase(getContacts.fulfilled, (state, action)=>{
            state.loading = false
            if (action.payload){
                state.contacts = action.payload
            }
        })
    }
})

export const{
    targetContact
} = contactsSlice.actions