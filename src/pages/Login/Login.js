import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from "react-native";
import { useNavigation } from '@react-navigation/native'
import firebase from "../../../firebaseConnect";

export default function Login() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loadingOn, setLoadingOn] = useState(false)

    function irRegistro() {
        navigation.navigate('Registro')
    }



    async function logarUser() {
        await firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                setLoadingOn(true)
                setTimeout(() => {
                    setLoadingOn(false)
                    alert('Usuário criado com sucesso')
                    Keyboard.dismiss()
                    navigation.navigate('UserLogged')
                    setEmail("")
                    setPass("")
                }, 2000);

            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: '#12b3bd', fontSize: 30, fontWeight: 'bold' }}>Login</Text>

            <View style={styles.containerInputs}>
                <Text style={{ position: 'absolute', left: 39, top: '4%', color: 'white', fontSize: 17, fontWeight: 'bold' }}>E-mail</Text>
                <TextInput
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                    keyboardType="email-address"
                    onChangeText={(texto) => { setEmail(texto) }}
                />

                <Text style={{ position: 'absolute', left: 39, top: '32%', color: 'white', fontSize: 17, fontWeight: 'bold' }}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(texto) => { setPass(texto) }}
                />

                <View style={styles.containerButton}>
                    {loadingOn

                        ?

                        (
                            <ActivityIndicator size={45} color='white' />
                        )
                        :
                        (
                            <TouchableOpacity onPress={logarUser} style={styles.button}>
                                <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'white' }}>Entrar</Text>
                            </TouchableOpacity>
                        )
                    }

                    <TouchableOpacity style={styles.button}>
                        <Text onPress={irRegistro} style={{ fontWeight: 'bold', fontSize: 17, color: 'white' }}>Registrar</Text>
                    </TouchableOpacity>
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
    containerInputs: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 4,
        width: '80%',
        height: 46,
        margin: 20,
        paddingLeft: 5
    },
    button: {
        backgroundColor: '#12b3bd',
        width: '100%',
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 10,
    },
    containerButton: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 35,
    }
})