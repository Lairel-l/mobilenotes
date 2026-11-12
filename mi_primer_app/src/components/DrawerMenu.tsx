import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { DrawerContentScrollView, DrawerContentComponentProps } from "@react-navigation/drawer";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
//import { BtnTouch } from "./BtnTouch";


interface BtnProps {
  action: () => void;
  text:   string;
}

const BtnMenu = ( { action, text }:BtnProps ) => {
  return (
    <TouchableOpacity
      onPress={ action }
    >
      <View
        style={ style.textBg }
      >
        <Text
          style={ style.text }
        >
          { text }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export const DrawerMenu = ( { navigation }: DrawerContentComponentProps ) => {

    const { logout } = useContext( AuthContext ); //authState

  return (
    <DrawerContentScrollView>
      <View
        style={ style.container }
      >
        <View
          style={ style.avatarBorder }
        >
          <Image
            style={ style.avatar }
            source={{ uri: 'https://i.pinimg.com/736x/bf/b7/4e/bfb74e2d7c4e2580a3fbefe9af91d714.jpg' }}
          />
        </View>
        <Text
          style={ style.username }
        >
          Lairel
        </Text>
        <View
          style={ style.container }
        >

        <BtnMenu
          text="Mi Pokedex"
          action={ () => navigation.navigate('PokemonNavigator') }
        />

        <BtnMenu
          text="Guía del Entrenador"
          action={ () => navigation.navigate('StackNavigator') }
        />

        <BtnMenu
          text="Formulario"
          action={ () => navigation.navigate('FormScreen') }
        />
        
        <BtnMenu
            text="ImagePickerScreen"
            action={ () => navigation.navigate('ImagePickerScreen')}
        />
    
        <BtnMenu
            text="Localizacion"
            action={ () => navigation.navigate('LocationScreen')}
        />

        <BtnMenu
            text="Gestion de Usuarios"
            action={ () => navigation.navigate('UserStackNavigator')}
        />
        <BtnMenu
            text="Tareas"
            action={ () => navigation.navigate('Tareas')}
        />
        <BtnMenu
            text="Login"
            action={ () => navigation.navigate('UserStackNavigator')}
        />
        <BtnMenu
            text="Libros"
            action={ () => navigation.navigate('Libros')}
        />

        <BtnMenu
          text="Dashboard"
          action={ () => navigation.navigate('DataResponseScreen') }
        />

        <BtnMenu
            text="Productos"
            action={ () => navigation.navigate('ProductoScreen') }
        />
        
        <BtnMenu
            text="Cerrar sesión"
            action={logout}
        />
        </View>
      </View>
    </DrawerContentScrollView>
  );

}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBg: {
    backgroundColor: '#f5fff8',
    //borderColor: '#2e3227',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'gray',
    marginTop: 32,
    width: 230,
    elevation: 24,
    shadowColor: '#365016'
  },
  text: {
    color: '#007c5d',//"#516d2f",
    fontSize: 30,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)', 
    textShadowOffset: { 
      width: 1, 
      height: 3 
    },
    textShadowRadius: 3,
  },
  avatar: {
    borderColor: '#cceea1',
    borderRadius: 100,
    borderWidth: 10,
    height: 180,
    width: 180,
    elevation: 20,
    shadowColor: '#365016'
  },
  avatarBorder: {
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 10,
    height: 200,
    width: 200,
    marginTop: 60
  },
  username: {
    fontSize: 35,
    color: "white",
    fontWeight: 'bold',
    marginTop: 35, 
  }
});
