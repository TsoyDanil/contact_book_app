import React from "react";
import { Text, Image, Pressable, StyleSheet, View } from "react-native";

const ContactBlock = (props) => {
    return (
        <>
            <Pressable onPress={props.showExtraData}>
                <View style={styles.contactBlock}>
                    <Image source={{uri: props.photoSrc}} style={styles.image}/>
                    <Text>{props.name}</Text>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
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
    image:{
        width:70,
        height:70,
        resizeMode: 'cover',
        marginRight: 10
    },
})

export default ContactBlock