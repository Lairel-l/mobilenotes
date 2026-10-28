import { ReactNode } from "react";
//import { PositionScreen } from "./src/screens/PositionScreen";
//import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
//import { CounterScreen } from "./src/screens/CounterScreen";
//import { CounterReducerScreen } from "./src/screens/CounterReducerScreen";
//import { UseEffectScreen } from "./src/screens/UseEffectScreen";
//import { StackNavigator } from "./src/navigator/StackNavigator";
//import { PokemonNavigator } from "./src/navigator/PokemonNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { NavClases } from "./src/navigator/NavClases";
import { DrawerNavigator } from "./src/navigator/DrawerNavigator";
import { AuthProvider } from "./src/context/AuthContext";


const App = () => {

  return (
    <AppState>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </AppState>
    //<BoxObjectModelScreen />
    //<CounterReducerScreen />
    //<CounterScreen />
    //<PositionScreen />
    //<UseEffectScreen />
    /*<NavigationContainer>
      <NavClases />
    </NavigationContainer>*/
    /*<NavigationContainer>
      <StackNavigator />
    </NavigationContainer>*/
    /*<NavigationContainer>
      <PokemonNavigator/>
    </NavigationContainer>*/
  );

}

const AppState = ( { children }: { children: ReactNode } ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
}
export default App;


/*import { View, Text } from "react-native";

let nombre: string = "Jessica";

const App = () => {

  const grupo: string = "DSM-42";

  return (
    <View
      style={{
        alignItems: "center",
        alignContent: 'center'
      }}
    >
      <Text
        style={{
          marginTop: 400,
          fontSize: 50,
          color: 'blue--

          
          textAlign: 'center'
        }}
      >
        Hola {nombre}, saludos al grupo: {grupo}
      </Text>
    </View>
  );

}

export default App;
*/