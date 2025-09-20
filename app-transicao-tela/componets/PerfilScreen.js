import React from "react";
import {View, Text, Button} from "react-native";

function PerfilScreen({navigation}) {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Bem Vindo a tela de Perfil</Text>
            <Button
                title="Voltar a Tela Inicial" onPress={() => navigation.goback()}
            />
        </View>
    )
}

export default PerfilScreen;