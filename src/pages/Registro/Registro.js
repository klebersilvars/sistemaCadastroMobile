import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from "react-native";
import firebase from "../../../firebaseConnect";
import {useNavigation} from '@react-navigation/native'

export default function Registro() {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [loadingCreatingUser, setLoadingCreatingUser] = useState(false)
    const navigation = useNavigation()

    function irLogin() {
        navigation.navigate('Login')
    }

    async function registrarUser() {
        await firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(() => {
                setLoadingCreatingUser(true)
                setTimeout(() => {
                    setLoadingCreatingUser(false)
                    alert('Usuário criado com sucesso!')
                    Keyboard.dismiss()
                    setEmail('')
                    setPass('')
                    
                }, 3000);

            }).catch((error) => {
                if (error.code == 'auth/email-already-exists') {
                    alert('Esse e-mail já está sendo utilizado')
                } else if (error.code == 'auth/weak-password') {
                    alert('Sua senha está fraca, precisa ter mais de 6 caracteres')
                }
            })
    }
    return (

        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={{ fontSize: 25, color: "#12b3bd", fontWeight: 'bold' }}>Registro</Text>

            <View style={styles.containerInput}>

                <View style={styles.containerEmailRegistro}>
                    <Text style={{ position: 'absolute', left: 50, top: 4, color: 'white', fontSize: 17, }}>E-mail</Text>
                    <TextInput
                        placeholder="Digite seu e-mail"
                        onChangeText={(texto) => { setEmail(texto) }}
                        keyboardType="email-address"
                        style={styles.input}
                    />
                </View>

                <View style={styles.containerPassRegistro}>
                    <Text style={{ position: 'absolute', left: 50, top: 4, color: 'white', fontSize: 17, }}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha"
                        onChangeText={(texto) => { setPass(texto) }}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>

                <View style={styles.containerButton}>
                    {loadingCreatingUser

                        ?
                        (
                            <ActivityIndicator size={45} color='white' />
                        )
                        :
                        (
                            <TouchableOpacity onPress={registrarUser} style={styles.button}>
                                <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'white' }}>Registrar</Text>
                            </TouchableOpacity>
                        )

                    }

                    <Text onPress={irLogin} style={{ fontWeight: 'bold', fontSize: 13, color: 'white' }}>Voltar para o login</Text>
                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333'
    },
    containerInput: {
        width: '100%',
        height: 400,
        borderColor: 'red',
        padding: 10,
        alignItems: 'center',
    },
    containerEmailRegistro: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    input: {
        width: '70%',
        height: 46,
        backgroundColor: 'white',
        paddingLeft: 5,
        borderRadius: 4,
    },
    containerPassRegistro: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    containerButton: {
        width: '100%',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#12b3bd',
        width: '60%',
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 10,
    }
})