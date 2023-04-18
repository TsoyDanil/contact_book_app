import React, { useEffect, useState } from "react";
import { FlatList, Image, Modal, Pressable, StyleSheet, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ContactBlock from "../components/ContactBlock";
import { getContacts, targetContact } from "../store/contacts.slice";



const ContactsList = () => {

    const dispatch = useDispatch()

    const {targetedContact, contacts, loading} = useSelector(state => state.contacts)

    const [showModal, setShowModal] = useState(false)

    const showExtraData = (key) => {
        console.log(contacts[key])
        dispatch(targetContact(contacts[key]))
        setShowModal(true)
    }

    const hideModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        dispatch(getContacts())
    }, [])

    return(
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Contacts:</Text>
            </View>
            {
                showModal ? 
                <Modal>
                    <View style={styles.containerModal}>
                        <View>
                            <Text style={styles.modalHeaderText}>{targetedContact.name}</Text>
                            <Image source={{uri: targetedContact.photoSrc}} style={styles.imageModal}/>
                            <Text style={styles.modalText}>+{targetedContact.phone}</Text>
                            <Text style={styles.modalText}>{targetedContact.email}</Text>
                        </View>
                        <View>
                            <Button color={'grey'} style={styles.modalButton} onPress={hideModal} title={'Back To List'}/>
                        </View>
                    </View>
                </Modal> : 
                null
            }
            {
                Object.keys(contacts).length 
                ?
                <FlatList
                    style={styles.contactsList}
                    data={Object.keys(contacts)}
                    renderItem = {(info) => {
                        return <ContactBlock
                                    showExtraData={()=>{showExtraData(info.item)}}
                                    photoSrc={contacts[info.item].photoSrc}
                                    name={contacts[info.item].name}
                                />
                    }}
                />
                : 
                <>
                    {
                        
                        loading ? <Text style={styles.headerText}>Loading...</Text> : <Text style={styles.headerText}>No contacts yet...</Text>
                        
                    }
                </>
            }
        </>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: 'wheat',
        marginBottom: 10,
        marginTop: 20
    },
    headerText: {
        margin: 10,
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    contactsList: {
        margin: 10,
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    menuList:{
        width: '100%',
        display: 'flex',
        alignContent: 'center'
    },
    image:{
        width:60,
        height:60,
        resizeMode: 'cover',
        marginRight: 10
    },
    imageModal:{
        width:200,
        height:200,
        resizeMode: 'cover',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 4,
        borderColor: 'grey'
    },
    contactBlock:{
        backgroundColor: 'gray',
        padding: 10,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black'
    },
    containerModal:{
        flex: 1,
        backgroundColor: 'wheat',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: 'black'
    },
    modalHeaderText:{
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    modalText:{
        fontSize: 18
    }
})

export default ContactsList