import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { PokemonDetailResponse } from '../interfaces/pokemonResponse';

interface Props {
  pokemon: PokemonDetailResponse;
  types:                string[];
}


export const PokemonFull = ( { pokemon, types }:Props ) => {
  return(
    <View
      style={ style.containerDetail }
    >
      <ScrollView 
        contentContainerStyle={style.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={{
          ...style.infoContainer,
        }}>
          <View>
            <Text style={{
              ...style.section,
              marginTop: 10,
              alignSelf: 'center'
            }}>
              Tipo de pokemon: {pokemon.types?.map(({ type }) => (
                <Text
                  style={{
                    ...style.value,
                  }}
                  key={`${type.name}-${type.url}`}
                >
                  -{ `${type.name} ` }-
                </Text>
              ))}
            </Text>
          </View>
          <View style={style.section}>
            <Text 
              style={style.sectionTitle}
            >
              Datos Físicos
            </Text>
            <View style={style.datosContainer}>
              <View style={style.datosA}>
                <Text style={style.label}>
                  Peso
                </Text>
                <Text style={style.value}>
                  {pokemon.weight / 10} kg
                </Text>
              </View>
              <View style={style.datosA}>
                <Text style={style.label}>
                  Altura
                </Text>
                <Text style={style.value}>
                  {pokemon.height / 10} m
                </Text>
              </View>
              <View style={style.datosA}>
                <Text style={style.label}>
                  Exp. Base
                </Text>
                <Text style={style.value}>
                  {pokemon.base_experience}
                </Text>
              </View>
            </View>
          </View>
            <Text style={{
              ...style.section,
              marginTop: 10,
              alignSelf: 'center'
            }}>
            Default: { (pokemon.is_default) ? 'True': 'False' }
            </Text>
          <Text
            style={ style.sectionTitle }
          >
          Imagenes de los tipo de este Pokemon :
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            { pokemon.sprites?.front_shiny && (
              <Image
                style={ style.picture }
                source={{ uri: pokemon.sprites.front_shiny }}
              />
            )}
            { pokemon.sprites?.back_shiny && (
              <Image
                style={ style.picture }
                source={{ uri: pokemon.sprites.back_shiny }}
              />
            )}
            { pokemon.sprites?.front_female && (
              <Image
                style={ style.picture }
                source={{ uri: pokemon.sprites.front_female }}
              />
            )}
            { pokemon.sprites?.back_female && (
              <Image
                style={ style.picture }
                source={{ uri: pokemon.sprites.back_female }}
              />
            )}

            { pokemon.sprites?.front_shiny_female && (
              <Image
                style={ style.picture }
                source={{ uri: pokemon.sprites.front_shiny_female }}
              />
            )}

            { pokemon.sprites?.back_shiny_female && (
              <Image
                style={ style.picture }
                source={{ uri: pokemon.sprites.back_shiny_female }}
              />
            )}
          </ScrollView>
          <View>
              <Text style={{
                ...style.section,
                marginTop: 10,
                alignSelf: 'center'
              }}>
              Habilidades: {pokemon.abilities?.map(({ ability }) => (
                <Text
                  style={{
                    ...style.value,
                  }}
                  key={`${ability.name}-${ability.url}`}
                >
                  -{ `${ability.name} ` }-
                </Text>
              ))}
            </Text>
          </View>
          <View>
              <Text style={{
                ...style.section,
                marginTop: 10,
                alignSelf: 'center'
              }}>
              Estadisticas: {"\n\n"}{pokemon.stats?.map(({ stat }) => (
                <Text
                  style={{
                    ...style.value,
                  }}
                  key={`${stat.name}-${stat.url}`}
                >
                  -{ `${stat.name} `} -
                </Text>
              ))}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  containerDetail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 5,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  infoContainer: {
      backgroundColor: '#FFFDF9', //cambiar al tipo de pok
      borderWidth: 1,
      //borderColor: '#785A6C',    // cambiar al del tipo de pokemon 
      borderRadius: 30,
      padding: 12,
      //right: ,
      width: '98%',
      alignSelf: 'center',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      //marginTop: -20 

  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'cursive',
    //color: '#333',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  text: {
    fontSize: 20, //pokemon detalles
    textAlign: 'center',
    color:'gray'
    
  },
  picture: {
    width: 220,
    height: 270
  },
  datosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datosA: {
    alignItems: 'center',
    backgroundColor: 'beige',
    padding: 10,
    borderRadius: 10,
    width: '30%',
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
});