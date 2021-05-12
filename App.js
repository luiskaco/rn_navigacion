import 'react-native-gesture-handler';  // colocar siempre de primero

import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
// Nota: importante siempre llamar el compoente de navegacion

// Ipo de Navegacion Stack | drawel y tab
import { createStackNavigator } from '@react-navigation/stack';
// Creamos el Stack

const Stack = createStackNavigator();

// componentes
import Inicio from './views/inicio';
import Nosotros from './views/nosotros';

const App = () => {

  return (
   <>
          <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          // Para personalizar todas las pantallas
          screenOptions={{ 
                 title: "Componente Principal" ,
                 headerTitleAlign: 'center',
                 headerStyle:{
                 backgroundColor: '#f3511e'
              },
                 headerTintColor: '#fff', // Cambia color de la leta
                 headerTitleStyle: {
                 fontWeight: 'bold'
               }
            }}
         
        >
          <Stack.Screen
              name="Inicio"
              component={Inicio}
              // Persnalizar de maenra invidiual

              // options={{  // Modifica parametros del nombre de la pagina
              //   title: "Componente Principal" ,
              //   headerTitleAlign: 'center',
              //   headerStyle:{
              //     backgroundColor: '#f3511e'
              //   },
              //   headerTintColor: '#fff', // Cambia color de la leta
              //   headerTitleStyle: {
              //     fontWeight: 'bold'
              //   }
              // }}
          />
          <Stack.Screen
              name="Nosotros"
              component={Nosotros}
              options={({route}) => ({   // Crear titulos dinamicos
                title: route.params.clienteId
              })}
          />
        </Stack.Navigator>
      </NavigationContainer>

   </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
