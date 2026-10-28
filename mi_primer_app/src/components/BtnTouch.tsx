import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  borderColor?:   string;
  color?:         string;
  onPress:        () => void;
  title:          string;
}

export const BtnTouch = ( { title, color = '#c6e79c', borderColor = '#172b00', onPress } : Props ) => {
  return(
    <TouchableOpacity
      onPress={ () => onPress() }
    >
      <View
        style={{
          ...style.btnContainer,
          backgroundColor: color,
          borderColor: borderColor
        }}
      >
          <Text
            style={ style.text }
          >
            { title }
          </Text>
      </View>
    </TouchableOpacity>
  );
}

export const BtnTouch2 = ( { title, color = '#ffd54d', borderColor = 'white', onPress } : Props ) => {
  return(
    <TouchableOpacity
      onPress={ () => onPress() }
    >
      <View
        style={{
          ...style.btnContainer2,
          backgroundColor: color,
          borderColor: borderColor
        }}
      >
          <Text
            style={ style.text2 }
          >
            { title }
          </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  text: {
    color: '#172b00',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text2: {
    color: '#ff4d8e',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  btnContainer: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    width: 230,
    height: 100,
    borderRadius:25,
    marginVertical: 10,
    borderWidth: 2,
    elevation: 10,
  },
  btnContainer2: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    width: 350,
    height: 80,
    borderRadius:25,
    marginVertical: 14,
    borderWidth: 4
  },
});