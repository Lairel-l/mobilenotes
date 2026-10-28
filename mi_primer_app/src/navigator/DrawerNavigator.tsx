import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { PokemonNavigator } from "./PokemonNavigator";
import { useWindowDimensions } from "react-native";
import { DrawerMenu } from "../components/DrawerMenu";
import { FormScreen } from "../screens/FormScreen";
import { NavClases } from "./NavClases";
import { ImagePickerScreen } from "../screens/ImagePickerScreen";
import { LocationScreen } from "../screens/LocationScreen";
import { UserStackNavigator } from "./UserStackNavigator";

export type RootDrawerParams = {
  NavClases:            undefined;  
  StackNavigator:       undefined;
  PokemonNavigator:     undefined;
  FormScreen:           undefined;
  ImagePickerScreen:    undefined;
  LocationScreen:       undefined;
  UserStackNavigator:  undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();


export const DrawerNavigator = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName='NavClases'
      screenOptions={{
        headerShown: false,
        drawerType: width > 720 ? 'permanent': 'front',
        drawerPosition: 'right',//right
        overlayColor: 'rgba(204, 238, 161, 0.4)',
        drawerStyle: {
          backgroundColor: 'rgba(0, 105, 78, 0.74)',
          width: width * 0.6
        }
      }}
      drawerContent={ (props) => <DrawerMenu {...props} /> }
    >
      <Drawer.Screen
        name='NavClases'
        component={NavClases}
      />
      <Drawer.Screen
        name='PokemonNavigator'
        component={PokemonNavigator}
      />
      <Drawer.Screen
        name='FormScreen'
        component={FormScreen}
      />
      <Drawer.Screen 
        name='StackNavigator' 
        component={StackNavigator} 
      />
      <Drawer.Screen 
        name='ImagePickerScreen' 
        component={ImagePickerScreen} 
      />
      <Drawer.Screen 
        name='LocationScreen' 
        component={LocationScreen} 
      />
      <Drawer.Screen 
        name='UserStackNavigator' 
        component={UserStackNavigator} 
      />

    </Drawer.Navigator>
  );
}
