import { createStackNavigator } from "@react-navigation/stack";
import { Clases1 } from "../screens/stack/Clases1";
import { BoxObjectModelScreen } from "../screens/BoxObjectModelScreen";
import { PositionScreen } from "../screens/PositionScreen";
import { CounterScreen } from "../screens/CounterScreen";
import { CounterReducerScreen } from "../screens/CounterReducerScreen";
import { UseEffectScreen } from "../screens/UseEffectScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";
import { PokemonNavigator } from "./PokemonNavigator";

export type NavClasesParams = {
  Clases1: undefined;
  BoxObjectModelScreen: undefined;
  PositionScreen: undefined;
  CounterScreen: undefined;
  CounterReducerScreen: undefined;
  UseEffectScreen: undefined;
  StackNavigator: undefined;
  PokemonNavigator: undefined;
}

const Stack = createStackNavigator<NavClasesParams>();

export const NavClases = () => {
  return(
    <Stack.Navigator
      initialRouteName="Clases1"
      screenOptions={{
        //headerMode: 'float', //Screen
        headerShown: false, //true si quieres que se vea
        /*headerStyle: {
          height: 100,
          shadowColor: 'black',
          backgroundColor: '#f76e6e',
          borderColor: 'purple',
          borderWidth: 1,
          //borderRadius: 15,
          opacity: 0.6
        },*/
        /*headerTitleStyle: {
          fontWeight: 'bold',
          color: 'purple'
        },*/
        /*headerTintColor: 'purple',
        cardStyle: {
          backgroundColor: 'rgb(245,241,218)'
        }*/
      }}
    >
      <Stack.Screen
        name="Clases1"
        component={Clases1}
        options={{ title: 'Menú de Clases' }}
      />
      <Stack.Screen
        name="BoxObjectModelScreen"
        component={BoxObjectModelScreen}
        options={{ title: 'Cajitas' }}
      />
      <Stack.Screen
        name="PositionScreen"
        component={PositionScreen}
        options={{ title: 'Posiciones' }}
      />
      <Stack.Screen
        name="CounterScreen"
        component={CounterScreen}
        options={{ title: 'Contador 1' }}
      />
      <Stack.Screen
        name="CounterReducerScreen"
        component={CounterReducerScreen}
        options={{ title: 'Contador 2' }}
      />
      <Stack.Screen
        name="UseEffectScreen"
        component={UseEffectScreen}
        options={{ title: 'Fecha y hora' }}
      />      
      <Stack.Screen
        name="ClasesStack"
        component={StackNavigator}
        options={{ title: 'navegacion' }}
      />
      <Stack.Screen
        name="PokedexStack"
        component={PokemonNavigator}
        options={{ title: 'PokeDex' }}
      />
    </Stack.Navigator>
  );
}