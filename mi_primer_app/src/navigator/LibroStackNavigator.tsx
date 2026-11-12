import { createStackNavigator } from '@react-navigation/stack';
import { HomeLibros } from '../screens/libros/HomeLibros';
import { FormLibro } from '../screens/libros/FormLibro';
import { LibroResponse } from '../hooks/useLibroApi';

export type StackLibroParams = {
    HomeLibros: undefined;
    FormLibro: LibroResponse; 
};

const Stack = createStackNavigator<StackLibroParams>();

export const LibroStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'white' }
            }}
        >
            <Stack.Screen name="HomeLibros" component={HomeLibros} />
            <Stack.Screen name="FormLibro" component={FormLibro} />
        </Stack.Navigator>
    );
}
