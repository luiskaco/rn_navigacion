import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

const Inicio = ({navigation}) => {

    /** Nota: Cuando se registra el stack.scrren se tiene acceso a todos los props de navegacion **/

    const informacion = {
        clienteId: 5000, 
        totalpagar: 500
    }

    const informacion2 = {
        clienteId: 400, 
        totalpagar: 100
    }

    const visitarNosotros =() =>{
        navigation.navigate('Nosotros', {informacion,informacion2})
        // Nos sirve para ir a otro stack
    }

    return ( 
        <>
            <View style={styles.contenedor}>
                 <Text>Desde Iinicio</Text>

                 <Button
                    title="Ir a Nosotros"
                    onPress={ () => visitarNosotros() }
                />
            </View>
        </>
     );
}

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        alignItems:'center', 
        justifyContent:'center'
    }
});
 
export default Inicio;
