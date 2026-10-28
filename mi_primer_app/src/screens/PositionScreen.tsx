import { View, StyleSheet, useWindowDimensions } from "react-native";

export const PositionScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View
      style={ style.container }
    >
      <View
        style={{
          ...style.boxBlue,
          backgroundColor: '#f6f1d1',
          borderRadius: 400,
          height: height * 0.15,
          left: 10,
          position: 'absolute',
          top: 10,
          width: height * 0.15
        }}
      />
      <View
        style={{
          backgroundColor: '#e7e2f8',
          position: 'absolute',
          bottom: 0,
          width: width,
          height: height * 0.33
        }}
      />
      <View
        style={{
          ...style.boxBlue,
          //width: width,
          //height: height * 0.33
        }}
      />
      <View
        style={{
          ...style.boxOrange,
          //width: width,
          //height: height * 0.33
        }}
      />
      <View
        style={{
          ...style.boxLila,
          //width: width,
          //height: height * 0.33
        }}
      />
      <View
        style={{
          ...style.boxBlue,
          backgroundColor: '#7fd4e1',
          borderRadius: 400,
          height: height * 0.4,
          left: 180,
          position: 'absolute',
          top: 800,
          width: height * 0.5
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200b4b',
    alignItems: 'center',
    flexDirection: 'row',//'column-reverse',
    alignContent: 'center',
    justifyContent: 'space-evenly'
  },
  boxBlue: {
    //flex: 3
    backgroundColor: '#c9e6ee',
    height: 100,
    width: 100,
    alignSelf: 'center'//'flex-end'
  },
  boxOrange: {
    //flex: 3
    backgroundColor: '#fad1d8',
    height: 100,
    width: 100
  },
  boxLila: {
    //flex: 3
    backgroundColor: '#dbc0e7',
    height: 100,
    width: 100,
    alignSelf: 'center'//'flex-end'
  }
});