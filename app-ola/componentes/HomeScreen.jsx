import React, {useState} from 'react';
import {Text, Button} from 'react-native';

import PerfilScreen from './PerfilScreen';

function HomeScreen() {

    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador (contador + 1);

    }

    return (<view>
                <Text>Contador: {contador} </Text>
                <Button title='Incrementar' onPress={incrementarContador}/>
            </view>
            );


}

export default HomeScreen;