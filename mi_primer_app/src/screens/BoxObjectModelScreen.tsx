import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return(
    <View
      style={ style.container }
    >
      <Text
        style={ style.text }
      >
        Empieza haciendo lo que sea necesario; {"\n"} luego haz lo que sea posible
        y {"\n"}de repente estarás haciendo lo imposible. {"\n"}
        — Francisco de Asís
      </Text>
      <View
        style={ style.boxGreen }
      >
        <Text
          style={ style.text }
        >
          Página de CAJITAS :D {"\n"}
          Jessy OwO
        </Text>
      </View>
      <Text
        style={ [style.text, style.cajitas] }
      >
        Cajita Feliz {"\n"} :D
      </Text>
      <Text
        style={ [style.text, style.cajitas] }
      >
        Cajita Triste {"\n"} TnT
      </Text>
      <Text
        style={ [style.text, style.cajitas] }
      >
        Cajita Confundida {"\n"} ._.?
      </Text>
      <Text
        style={ [style.text, style.cajitas] }
      >
        Cajita Serena {"\n"} -u-
      </Text>
      <Text
        style={ [style.text, style.cajitas, style.especial] }
      >
        Cajita Especial [?]
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dbc0e7'
  },
  text: {
    //marginButtom,
    //marginLeft,
    //marginRight,
    //marginTop: 8,
    borderWidth: 4,
    borderColor: '#6c5b80',
    borderRadius: 9,
    color: '#200b4b',
    fontSize: 25,
    textAlign: 'center'
  },
  boxGreen: {
    //margin: 10,
    //marginHorizontal: 40,
    alignContent: 'center',
    backgroundColor: '#fad1d8',
    marginVertical: 40,
    width: 300,
    borderRadius: 9
  },
  cajitas: {
    position: 'center',
    width: 200,
    marginVertical: 10
  },
  especial: {
    backgroundColor: '#b5307e',
    color: 'white'
  }
});