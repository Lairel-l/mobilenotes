import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { NewPokemon } from "../interfaces/pokemonResponse";
import { useTypeColorPokemon } from "../hooks/useTypeColorPokemon";
import { useNavigation } from "@react-navigation/native";

interface Props{
  pokemon: NewPokemon;
}

const withWindows = Dimensions.get('window').width;

export const PokemonCard = ( { pokemon }: Props ) => {

  const { color, isLoading } = useTypeColorPokemon(`${pokemon.id}`);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate('PokemonDetail', { NewPokemon: pokemon }) }
    >
      <View
        style={{
          ...style.containerCard,
          width: withWindows * 0.41
        }}
      >
        <View
          style={{
            ...style.backgroundTop,
            backgroundColor: (isLoading) ? 'gray' :
            (color.length > 1) ? color[1]: color[0]
          }}
        />
        <View
          style={{
            ...style.backgroundButtom,
            backgroundColor: (isLoading) ? 'gray' :
            color[0]
          }}
        />
        <Text
          style={ style.name }
        >
          {pokemon.name}
          { `\nNo. ${pokemon.id}` } 
        </Text>
        <Image
          style={ style.pokeball }
          source={ require('./../../assets/pokeball-light.png') }
        />
        <Image
          style={style.pokemon}
          source={{ uri: pokemon.image }}
        />
      </View>
    </TouchableOpacity>
  );

}

const style = StyleSheet.create({
  containerCard: {
    marginHorizontal: 12,
    height: 140,
    width: 120,
    marginBottom: 30,
    borderRadius: 35,
    overflow: 'hidden',
    borderWidth: 0.5,
    //borderColor: "#d8dccc",
    elevation: 11
    //fontFamily: 'sans-serif-medium',

  },
  backgroundTop: {
    position: 'absolute',
    top: -150,
    left: 0,
    right: 0,
    bottom: '50%',
    backgroundColor: 'green',
    transform: [
      { rotateX: "20deg" },
      { rotateY: "-45deg" },
      { scale: 2 }
    ]
  },
  backgroundButtom: {
    position: 'absolute',
    top: '50%',
    left: -160,
    right: 0,
    bottom: 0,
    backgroundColor: '#4b662a',
    transform: [
      { rotateX: "20deg" },
      { rotateY: "-45deg" },
      { scale: 1.4 }
    ]
  },
  pokeball: {
    height: 130,
    width: 130,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.7
  },
  pokemon: {
    height: 100,
    width: 100,
    position: 'absolute',
    right: -2,
    bottom: -8,
    opacity: 0.9,
  },
  name: {
    color: "beige",
    textTransform: 'capitalize',
    fontSize: 23,
    fontWeight: 'bold',
    marginHorizontal: 14,
    textShadowRadius: 10,
    textShadowColor: "black"
  }
});