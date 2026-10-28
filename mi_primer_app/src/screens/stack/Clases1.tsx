import { View, Text } from 'react-native';
import { appTheme } from '../../theme/appTheme';
import { NavClasesParams } from '../../navigator/NavClases';
import { StackScreenProps } from '@react-navigation/stack';
import { BtnTouch2 } from '../../components/BtnTouch';

interface Props extends StackScreenProps<NavClasesParams,'Clases1'>{};

export const Clases1 = ( { navigation }:Props ) => {
  return(
    <View
      style={ appTheme.container2 }
    >
      <Text
        style={ appTheme.text2 }
      >
        Hola Jessy, bienvenida.{"\n"} Selecciona un tema: 
      </Text>
      <BtnTouch2
        title='Cajitas'
        onPress={ () => navigation.navigate('BoxObjectModelScreen') }
      />
      <BtnTouch2
        title='Posiciones'
        onPress={ () => navigation.navigate('PositionScreen') }
      />
      <BtnTouch2
        title='Contador 1'
        onPress={ () => navigation.navigate('CounterScreen') }
      />
      <BtnTouch2
        title='Contador 2'
        onPress={ () => navigation.navigate('CounterReducerScreen') }
      />
      <BtnTouch2
        title='Reloj de colores'
        onPress={ () => navigation.navigate('UseEffectScreen') }
      />
      <BtnTouch2
        title='Navigator'
        onPress={ () => navigation.navigate('StackNavigator') }
      />
      <BtnTouch2
        title='Pokedex'
        onPress={ () => navigation.navigate('PokemonNavigator') }
      />
    </View>
  );
}