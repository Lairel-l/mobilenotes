import { useEffect } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { appTheme } from '../../theme/appTheme';
import { BtnTouch } from '../../components/BtnTouch';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useLibroApi, LibroResponse } from '../../hooks/useLibroApi';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackLibroParams } from '../../navigator/LibroStackNavigator';

export const HomeLibros = () => {

  const { isLoading, loadLibros, listLibros } = useLibroApi();

  const navigation = useNavigation<StackNavigationProp<StackLibroParams>>();
  const focused = useIsFocused();

  useEffect( () =>  {
    loadLibros();
  },[ focused ]);

  const create: LibroResponse = {
    id: 0,
    titulo: '',
    autor: '',
    isbn: '',
    editorial: '',
    ano: 0,
    genero: '',
    idioma: '',
    numeroPaginas: 0,
    ubicacion: '',
    imagen1: '',
    imagen2: '',
    imagen3: '',
  };

  return (
    <View
      style={ appTheme.container }
    >
      <FlatList
        data={ listLibros }
        keyExtractor={ (item) => `#${item.id}` }
        ListHeaderComponent={(
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: 'center'
            }}
          >
            <Text
              style={ appTheme.text }
            >
              Catálogo de Libros
            </Text>
            <BtnTouch
              title='Agregar Libro'
              color='pink'
              borderColor='violet'
              onPress={ () => navigation.navigate('FormLibro', { ...create }) }
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        refreshControl={(
          <RefreshControl
            refreshing={ isLoading }
            onRefresh={ loadLibros }
            colors={[ "pink", "violet", "black" ]}
            progressBackgroundColor="black"
          />
        )}
        renderItem={ ({ item }) => (
          <View
            style={{
              flex: 1,
              margin: 5,
              padding: 10,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'pink',
              backgroundColor: 'white'
            }}
          >
            <Text style={{ fontWeight: 'bold', color: 'black' }}>{ item.titulo }</Text>
            <Text style={{ color: 'gray', fontSize: 12 }}>{ item.autor }</Text>
            <Text style={{ color: 'gray', fontSize: 10 }}>Ubicación: { item.ubicacion }</Text>
          </View>
        )}
      />
    </View>
  );

}
