import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

function LoginScreen ({ navigation }) {
    const [email, setEmail] = useState('');

    const realizarLogin = () => {
        if( email.trim() === '' ){
            alert('o campo está totalmente vazio')
        } else {
            navigation.navigate( 'TelaInicial', {email})
        }

    }

    return (
        <View style={styles.conteiner}>
            <Text style={styles.label}>Email: </Text>
            <TextInput 
                placeholder="Digite seu Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Login" onPress={realizarLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({

    conteiner: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    label: {
        fontSize: 18,
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor:" #000",
        padding: 8,
        borderRadius: 4
        
    }

})

export default LoginScreen;