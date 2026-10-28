import { View, Text, StyleSheet, Button } from 'react-native';
import { useCounter } from '../hooks/useCounter';
import { BtnTouch } from '../components/BtnTouch';

export const CounterScreen = () => {

  const { counter, add, reset, decrement } = useCounter(0);
  
  return(
    <View
      style={ style.container }
    >
      <Text
        style={ style.text }
      >
        Contador:
      </Text>
      <Text
        style={ style.text2 }
      >
        { counter }
      </Text>
      <BtnTouch
        title="Agregar"
        color='#cfd700'
        borderColor='#688900'
        onPress={ () => add() }
      />
      <BtnTouch
        title="Disminuir"
        color='#688900'
        borderColor='black'
        onPress={ () => decrement() }
      />
      <BtnTouch
        title="Limpiar"
        color= '#9c2d6c'
        borderColor='#370034'
        onPress={ () => reset() }
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige'
  },
  text: {
    fontSize: 70,
    color: '#690fad',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 200,
    color: '#690fad',
    fontWeight: 'bold'
  }
});