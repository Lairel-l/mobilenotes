import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { appTheme } from '../../theme/appTheme';
import { StackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { BtnTouch } from '../../components/BtnTouch';

interface Props extends StackScreenProps<StackParams, 'Screen1'> {};

export const Screen1 = ({ navigation }: Props) => {

  const drawerNavigation = useNavigation();

  return (
    <View style={appTheme.container}>
      
      <Image
        source={require('../../../assets/pokeball-dark.png')}
        style={{
          height: 470, 
          position: 'absolute',
          right: -150, 
          top: -160, 
          width: 470, 
          opacity: 0.2
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          right: 25,
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: 12,
          borderRadius: 10,
          zIndex: 999,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3
        }}
        onPress={() => drawerNavigation.dispatch(DrawerActions.openDrawer())}
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
          ☰
        </Text>
      </TouchableOpacity>
      <Text
        style={{ 
          ...appTheme.text, 
          color: '#008564',
          fontSize: 70,
          fontWeight: 'bold',
          marginBottom: 20,
          marginTop: 0,
          textShadowRadius: 50,
          textShadowColor: "#5ddcb0",
          textShadowOffset: { 
            width: 9, 
            height: 4 
          },
        }}
      >
        Pokedex
      </Text>
      <Text style={{
        ...appTheme.text, 
        color: '#008564', 
        fontSize: 40,
        fontWeight: 'bold', 
        marginBottom: 80, 
        textAlign: 'center',
        textShadowColor: '#5ddcb0', 
        textShadowOffset: { 
          width: 3, 
          height: 3 
        },
        textShadowRadius: 20
      }}>
        Guía del Entrenador
      </Text>
      <Image
        style={ style.entrenador }
        source={{ uri: 'https://i.pinimg.com/736x/6a/dd/3a/6add3a02c42a1e3085599c409fd8013e.jpg' }}
      />
      <Text style={{
        ...appTheme.text, 
        fontSize: 20, 
        textAlign: 'center',
        color: '#333', 
        marginBottom: 50, 
        paddingHorizontal: 25,
        marginTop: 20
      }}>
        Bienvenido, entrenador.{"\n\n"}
        ¿Listo para adquirir conocimientos básicos para convertirte en un Maestro Pokémon?
      </Text>

      <BtnTouch
        title="Comenzar →"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  entrenador: {
    height: 380,
    width: 180,
    elevation: 20,
    shadowColor: '#365016'
  },


});