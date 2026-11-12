import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { useEffect } from 'react';
import { appTheme } from '../../theme/appTheme';
import { BtnTouch } from '../../components/BtnTouch';
import { Fab } from '../../components/Fab';
import { useFormLibro } from '../../hooks/useFormLibro';
import { useImagePicker } from '../../hooks/useImagePicker';
import { StackScreenProps } from '@react-navigation/stack';
import { StackLibroParams } from '../../navigator/LibroStackNavigator';

interface Props extends StackScreenProps<StackLibroParams, 'FormLibro'>{};

export const FormLibro = ( { navigation, route }: Props ) => {
  const { state, handleInputChange, handleSubmit } = useFormLibro();
  const { image64, pickImage } = useImagePicker();

    useEffect( () => {
      const libro = route.params;
      handleInputChange("id", libro.id);
      handleInputChange("titulo", libro.titulo);
      handleInputChange("autor", libro.autor);
      handleInputChange("isbn", libro.isbn);
      handleInputChange("editorial", libro.editorial);
      handleInputChange("ano", libro.ano.toString());
      handleInputChange("genero", libro.genero);
      handleInputChange("idioma", libro.idioma);
      handleInputChange("numeroPaginas", libro.numeroPaginas.toString());
      handleInputChange("ubicacion", libro.ubicacion);
      handleInputChange("imagen1", libro.imagen1);
      handleInputChange("imagen2", libro.imagen2);
      handleInputChange("imagen3", libro.imagen3);
    },[]);
  
    useEffect( () => {
    if ( image64 !== null ) {
      handleInputChange('imagen1', image64);
    }
  }, [image64]);
  
  return (
    <ScrollView style={ appTheme.container }>
      <Text style={ appTheme.text }>Registro de Libros</Text>
      
      <Fab
        title='<-'
        position='left'
        color='pink'
        action={ () => navigation.goBack() }
      />

      <View>
        <Text style={[appTheme.text, { fontSize: 18 }]}>Título</Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Título del libro'
          value={ state.titulo }
          onChangeText={ (text) => handleInputChange('titulo', text) }
        />
      </View>

      <View>
        <Text style={[appTheme.text, { fontSize: 18 }]}>Autor</Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Autor'
          value={ state.autor }
          onChangeText={ (text) => handleInputChange('autor', text) }
        />
      </View>

      <View>
        <Text style={[appTheme.text, { fontSize: 18 }]}>ISBN</Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='ISBN'
          value={ state.isbn }
          onChangeText={ (text) => handleInputChange('isbn', text) }
        />
      </View>

      <View>
        <Text style={[appTheme.text, { fontSize: 18 }]}>Editorial</Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Editorial'
          value={ state.editorial }
          onChangeText={ (text) => handleInputChange('editorial', text) }
        />
      </View>

      <View>
        <Text style={[appTheme.text, { fontSize: 18 }]}>Año</Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Año'
          value={ state.ano }
          onChangeText={ (text) => handleInputChange('ano', text) }
          keyboardType='numeric'
        />
      </View>

      <View>
        <Text style={[appTheme.text, { fontSize: 18 }]}>Género</Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Género'
          value={ state.genero }
          onChangeText={ (text) => handleInputChange('genero', text) }
        />
      </View>

      <View>
        <Text style={[appTheme.text, { fontSize: 18 }]}>Idioma</Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Idioma'
          value={ state.idioma }
          onChangeText={ (text) => handleInputChange('idioma', text) }
        />
      </View>

      <View>
        <Text style={[appTheme.text, { fontSize: 18 }]}>Número de páginas</Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Páginas'
          value={ state.numeroPaginas }
          onChangeText={ (text) => handleInputChange('numeroPaginas', text) }
          keyboardType='numeric'
        />
      </View>

      <View>
        <Text style={[appTheme.text, { fontSize: 18 }]}>Ubicación</Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Ubicación'
          value={ state.ubicacion }
          onChangeText={ (text) => handleInputChange('ubicacion', text) }
        />
      </View>

      <BtnTouch
        title='Seleccionar Imagen'
        onPress={ () => pickImage() }
        color='pink'
        borderColor='white'
      />

      { state.imagen1 && (
        <Image
          style={{
            width: 120, height: 120, borderRadius: 20,
            borderColor: 'pink', borderWidth: 5, alignSelf: 'center', marginVertical: 10
          }}
          source={{ uri: `data:image/png;base64,${state.imagen1}` }}
        />
      )}

      <View style={{ marginTop: 20, marginBottom: 40 }}>
        <BtnTouch
          title='Guardar Libro'
          onPress={ handleSubmit }
          color='pink'
          borderColor='white'
        />
      </View>
    </ScrollView>
  );
};
