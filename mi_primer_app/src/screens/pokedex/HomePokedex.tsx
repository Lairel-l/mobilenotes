import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { usePokemonPaginated } from '../../hooks/usePokemonPaginated';
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import { appTheme } from '../../theme/appTheme';
import { PokemonCard } from '../../components/PokemonCard';

export const HomePokedex = () => {

  const { pokemonList, loadPokemon } = usePokemonPaginated();
  const navigation = useNavigation();


  return(
    <View
      style={ appTheme.container }
    >
      <Image
        source={ require('./../../../assets/pokeball-dark.png') }
        style={{
          height: 470,
          position: 'absolute', //absolute
          right: -150,
          top: -100,
          width: 470
        }}
      />

      <FlatList
        data={ pokemonList }
        keyExtractor={ (pokemon, index) => `${pokemon.id}${index}` }
        ListHeaderComponent={(
          <View
            style={{
              height: 210,
              borderRadius: 20,
              margin: 20
            }}
          >
            <Text
              style={{
                ...appTheme.text,
                color: '#008564', //#008564
                fontSize: 70,
                fontWeight: 'bold',
                marginBottom: 40,
                marginTop: 70,
                //shadowColor: '#b1d188',
                //fontFamily: 'AvenirNext-Heavy',
                textShadowRadius: 50,
                textShadowColor: "#5ddcb0",
                //textShadowColor: 'rgba(0, 0, 0, 0.2)', 
                textShadowOffset: { 
                  width: 9, 
                  height: 4 
                },
              }}
            >
              Pokedex
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={ false }
        numColumns={ 2 }
        renderItem={ ( { item } ) => (
          <PokemonCard
            pokemon={ item }
          />
        )}
        onEndReached={ loadPokemon }
        onEndReachedThreshold={ 0.2 }
        ListFooterComponent={(
          <ActivityIndicator
            style={{ height: 120}}
            size={70}
            color="green"
          />
        )}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 62,
          right: 25,
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: 12,
          borderRadius: 10,
          shadowOffset: { 
            width: 0, 
            height: 2 
          },
          shadowOpacity: 0.3,
          //shadowRadius: 4,
        }}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Text style={{ 
          color: 'white', 
          fontSize: 24, 
        }}>
          ☰
        </Text>
      </TouchableOpacity>
    </View>
  );
}