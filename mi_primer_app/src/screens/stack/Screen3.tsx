import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appTheme } from '../../theme/appTheme';
import { StackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { BtnTouch } from '../../components/BtnTouch';

interface Props extends StackScreenProps<StackParams, 'Screen3'> {};

export const Screen3 = ({ navigation }: Props) => {

  const drawerNavigation = useNavigation();

  return (
    <View style={appTheme.container}>
      
      <Image
        source={require('../../../assets/pokeball-dark.png')}
        style={{
          height: 470, 
          position: 'absolute',
          right: -150, 
          top: -100, 
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
        <Text style={{ 
          color: 'white', 
          fontSize: 24, 
          fontWeight: 'bold' 
        }}>
          ☰
        </Text>
      </TouchableOpacity>



      <Text style={{
        ...appTheme.text, 
        fontSize: 50, 
        fontWeight: 'bold',
        color: '#008564', 
        marginBottom: 50, 
        textAlign: 'center'
      }}>
        Consejos Finales
      </Text>

      <Text style={{ ...appTheme.text, fontSize: 18, marginBottom: 12, color: '#333', paddingHorizontal: 20 }}>
        - Captura todos los Pokémon que puedas.
      </Text>
      <Text style={{ ...appTheme.text, fontSize: 18, marginBottom: 12, color: '#333', paddingHorizontal: 20 }}>
        - Entrena a tu equipo para subir de nivel.
      </Text>
      <Text style={{ ...appTheme.text, fontSize: 18, marginBottom: 40, color: '#333', paddingHorizontal: 20 }}>
        - Usa los tipos a tu favor en las batallas.
      </Text>

      <BtnTouch
        title="Ir al Menú"
        onPress={() => drawerNavigation.dispatch(DrawerActions.openDrawer())}
      />

      <BtnTouch
        title="← Regresar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}