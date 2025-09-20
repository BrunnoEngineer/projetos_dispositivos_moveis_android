import React from "react";
import { Button, Text } from "react-native";


function PerfilScreen () {
    return (
        <view>
            <Text>
                Aqui é somente o perfil.
            </Text>
            <Button title="Clique Aqui!" onPress={ () => alert('Botão Pressionado!') }/>
        </view>
    );
}

export default PerfilScreen;