import React from "react";
import { View, Text, StyleSheet } from "react-native";

function TelaInicial({ route }) {
    const { email } = route.params;

    return (
        <View style={styles.conteiner}>
            <Text style={styles.textoInicial}>Bem Vindo, {email}!</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoInicial: {
        fontSize: 20,
        fontWeight: 'bold'
    }        
});


export default TelaInicial;