import { TouchableOpacity, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export const DrawerButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: 62,
        right: 25,
        zIndex: 20,
        elevation: 5,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 12,
        borderRadius: 10,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
      }}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 24,
        }}
      >
        ☰
      </Text>
    </TouchableOpacity>
  );
};
