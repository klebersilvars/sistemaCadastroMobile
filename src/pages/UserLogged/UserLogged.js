import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserLogged() {
    return(
    
        <View style={styles.container}>
            <Text style={styles.userLogado}>User Logado</Text>
        </View>
    
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userLogado: {
        fontSize: 30,
        color: '#12b3bd',
        fontWeight: 'bold'
    }
})