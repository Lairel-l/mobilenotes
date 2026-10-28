import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { PokemonParams } from '../../navigator/PokemonNavigator';
import { useTypeColorPokemon } from '../../hooks/useTypeColorPokemon';
import { useDetailPokemon } from '../../hooks/useDetailPokemon';
import { PokemonFull } from '../../components/PokemonFull';

interface Props extends StackScreenProps<PokemonParams, 'PokemonDetail'>{};

export const PokemonDetail = ( { navigation, route }:Props ) => {

  const data = route.params.NewPokemon;
  const { id, name, url, image } = data;
  const { isLoading, color } = useTypeColorPokemon(id);
  const { detailPokemon } = useDetailPokemon(id);

  return (
    <View
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 2, alignItems: 'center' }}
      >
        <View style={{
          ...style.leftContainer,
          backgroundColor: (isLoading) ? 'gray' : (color.length > 1) ? color[1] : color[0]
        }}/>

        <View style={{
          ...style.rightContainer,
          backgroundColor: (isLoading) ? 'gray' : color[0]
        }}/>
        
        <Image
          source={ require('./../../../assets/pokeball-light.png') }
          style={ style.pokeball }
        />

        <Image
          source={{ uri: image }}
          style={ style.pokemon }
        />

        <TouchableOpacity
          onPress={ () => navigation.goBack() }
        >
          <View
            style={ style.arrowBtn }
          >
            <Text
              style={ style.back }
            >
             {`<`}
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={ style.pokeid }
        >
          <Text
            style={ style.text }
          >
            {`${id}`}.
          </Text>
        </View>
        <View
          style={ style.title }
        >
          <Text
            style={ style.name }
          >
            {`\n${name}`}
          </Text>
        </View>
      </View>

      <View
        style={{ 
          flex: 3,
          backgroundColor: color.length > 0 ? color[0] : 'white',
        }}
      >
        {
          (!detailPokemon) ? (
            <ActivityIndicator
              size={100}
              color={color[0]}
            />
          ) :
          (
            <PokemonFull
              pokemon={ detailPokemon }
              types={ color }
            />
          )
        }
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  leftContainer: {
    //borderTopLeftRadius: 1000,
    backgroundColor: 'gray',
    borderBottomLeftRadius: 1000,
    height: "100%",
    left: 0,
    position: 'absolute',
    top: 0,
    width: "50%"
  },
  rightContainer: {
    //borderBottomRightRadius: 1000,
    backgroundColor: 'pink',
    borderTopRightRadius: 1000,
    height: "100%",
    position: 'absolute',
    right: 0,
    top: 0,
    width: "50%"
  },
  pokeball: {
    height: 380,
    width: 380,
    position: 'absolute',
    top: 50,
    opacity: 0.5,
  },
  pokemon: {
    height: 300,
    width: 300,
    position: 'absolute',
    top: 120,
  },
  arrowBtn: {
    left: -230,
    top: 60,
    position: 'absolute',
    //fontSize: 30
    backgroundColor: '#FFFDF9',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius:100,
    marginVertical: 14,
    borderWidth: 1,
    opacity: 0.8,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    //color: 'black',
    height: 370,
    zIndex: 999,
  },
  text: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    right: 23,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { 
      width: 2, 
      height: 2 
    },
    textShadowRadius: 5,
  },
  name: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    right: 23,
    textTransform: 'capitalize',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { 
      width: 2, 
      height: 2 
    },
    textShadowRadius: 5,
    top: -10
  },
  back: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    //right: -20,
  },
  title: {
    left: 190,
    top: 360,
    position: 'absolute',
  },
  pokeid: {
    left: 60,
    top: 360,
    position: 'absolute',
  },
  containerBottom: {
    top: 370,
    //color: 'black',
    height: 500,
    width: "100%",
    position: 'absolute'
  }
});