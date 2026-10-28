import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { appTheme } from '../../theme/appTheme';
import { StackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { BtnTouch } from '../../components/BtnTouch';

interface Props extends StackScreenProps<StackParams, 'Screen2'> {};

export const Screen2 = ({ navigation }: Props) => {

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
          shadowOpacity: 0.3,
        }}
        onPress={() => drawerNavigation.dispatch(DrawerActions.openDrawer())}
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
          ☰
        </Text>
      </TouchableOpacity>
      <Text style={{
        ...appTheme.text, 
        fontSize: 32, 
        fontWeight: 'bold',
        color: '#008564', 
        marginBottom: 50,
        marginTop: 60, 
        textAlign: 'center'

      }}>
        Tipos de Pokémon
      </Text>

      <ScrollView style={{  width: '40%', marginBottom: 40, marginTop: 10 }}>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#A8A878', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Normal</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#C03028', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Fighting</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#d1bcff', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Flying</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#87dc48', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Poison</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#dec483', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Ground</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#B8A038', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Rock</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#A8B820', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Bug</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#705898', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Ghost</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#B8B8D0', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Steel</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#EE6B2F', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Fire</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#97ccf7', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Water</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#78C850', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Grass</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#F8D030', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Electric</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#F85888', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Psychic</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#98D8D8', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Ice</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#702663', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Dragon</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#705848', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Dark</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#EE99AC', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Fairy</Text>
        <Text style={{ ...appTheme.text, fontSize: 22, color: '#68A090', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Default</Text>
      </ScrollView>

      <BtnTouch
        title="Siguiente →"
        onPress={() => navigation.navigate('Screen3')}
      />
      <BtnTouch
        title='←'
        onPress={ () => navigation.goBack() }
      />
    </View>
  );
}