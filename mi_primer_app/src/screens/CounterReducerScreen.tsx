import { View, Text, StyleSheet } from 'react-native';
import { BtnTouch } from '../components/BtnTouch';
import { useCounterReducer } from '../hooks/useCounterReducer';

export const CounterReducerScreen = () => {

  const { state, add, reset, decrement, add2, decrement2 } = useCounterReducer({ count: 0 });
  
  return(
    <View
      style={ style.container }
    >
      <Text
        style={ style.text }
      >
        Contador Reducer:
      </Text>
      <Text
        style={ style.text2 }
      >
        { state.count }
      </Text>

      <BtnTouch
        title="Agregar 1"
        color='#6d9dc5'
        borderColor='#6d9dc5'
        onPress={ () => add() }
      />
      <BtnTouch
        title="Agregar 2"
        color='#5e4b8b'
        borderColor='#5e4b8b'
        onPress={ () => add2() }
      />
      <BtnTouch
        title="Limpiar"
        color='#f8ca49'
        borderColor='#da1b61'
        onPress={ () => reset() }
      />
      <BtnTouch
        title="Disminuir 1"
        color='#ff6e61'
        borderColor='#ff6e61'
        onPress={ () => decrement() }
      />
      <BtnTouch
        title="Disminuir 2"
        color='#da1b61'
        borderColor='#da1b61'
        onPress={ () => decrement2() }
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
    backgroundColor: '#dbc0e7'
  },
  text: {
    fontSize: 40,
    color: '#690fad',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 150,
    color: '#690fad',
    fontWeight: 'bold'
  }
});