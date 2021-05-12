import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'


// props, {navigation, route}
const Nosotros = ( {navigation, route}) => {
     console.log(route);

     const {clienteId} = route.params.informacion;

    const volver = () => {
        // navigation.navigate('Inicio')    // Meotdo para volver
         navigation.goBack();               
         //Nota:  Meotodo historico para volver, regresa al anterior sin necesidad de especicar  la ruta a donde ira
        //navigation.push('inicio');
    }

    return ( 
        <>
            <View style={styles.contenedor}>
                <Text>Nosotros {clienteId}</Text>

                    <Button
                    title="Volver"
                    onPress={ () => volver() }
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
 
export default Nosotros;
