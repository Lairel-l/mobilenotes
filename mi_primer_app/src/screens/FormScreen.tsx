import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export const FormScreen = () => {
  const { state, handleInputChage } = useForm();
  const navigation = useNavigation();
  return(
    <View
      style={ appTheme.container }
    >
      <Image
        source={ require('../../assets/pokeball-dark.png') }
        style={{
          height: 470,
          position: 'absolute', //absolute
          right: -150,
          top: -100,
          width: 470
        }}
      />   
      <Text
        style={{ 
          ...appTheme.text, 
          color: '#008564', //#008564
          fontSize: 70,
          fontWeight: 'bold',
          marginBottom: 60,
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
      <Text
        style={ appTheme.text }
      >
        Ingrese sus datos:
      </Text>
      <View>
        <Text
          style={ appTheme.text2 }
        >
          Ingresa nombre del usuario:
        </Text>
        <TextInput
          style={ appTheme.textInput }
          value={ state.username }
          onChangeText={ (text) => handleInputChage('username',text) }
          placeholder='ej. Jessica Alvarez'
          placeholderTextColor='#008564'
        />
        <Text
          style={ appTheme.text2 }
        >
          Ingresa contraseña:
        </Text>
        <TextInput
          style={ appTheme.textInput }
          value={ state.password }
          onChangeText={ (text) => handleInputChage('password',text) }
          placeholder=''
          placeholderTextColor='#008564'
          keyboardType='default'
          secureTextEntry={true}
        />
        <Text
          style={ appTheme.text2 }
        >
          Edad:
        </Text>
        <TextInput
          style={ appTheme.textInput }
          value={ state.age }
          onChangeText={ (text) => handleInputChage('age',text) }
          placeholder='ej. 18'
          placeholderTextColor='#008564'
          keyboardType='default'
        />
        <Text
          style={ appTheme.text2 }
        >
          Estado Civil:
        </Text>
        <TextInput
          style={ appTheme.textInput }
          value={ state.stateCivil }
          onChangeText={ (text) => handleInputChage('stateCivil',text) }
          placeholder='ej. soltero'
          placeholderTextColor='#008564'
        />
        <TouchableOpacity
          onPress={ () => console.log(state) }
        >
          <View
            style={{
              backgroundColor: '#008564',
              width: 230,
              height: 55,
              marginTop: 40,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10
            }}
          >
            <Text
              style={{ textAlign: 'center', fontSize: 30, color: "#f7fbea" }}
            >
              Enviar datos
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: -280,
            right: -30,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 12,
            borderRadius: 10,
            zIndex: 999,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
          }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
            ☰
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}