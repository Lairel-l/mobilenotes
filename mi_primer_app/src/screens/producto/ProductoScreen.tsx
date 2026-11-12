import { ReactNode, useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl, useWindowDimensions } from 'react-native';
import { pandoraApi } from '../../api/pandoraApi';
import { BarChart, PieChart } from 'react-native-gifted-charts';

const C = {
  fondo: '#fdfbf7',
  tarjeta: '#ffffff',
  borde: '#e6d5c3',
  texto: '#4a3f35',
  suave: '#9a8a7c',
  exito: '#b2d430',
  estrella: '#fb8c2c',
  precio: '#d91e63',
  categoria: '#f4a7c6',
  info: '#a5d8f3',
  reload: '#d91e63',
};

export const ProductoScreen = () => {
  const { width } = useWindowDimensions();
  const [total, setTotal] = useState<number>(0);
  const [abarrotes, setAbarrotes] = useState<any[]>([]);
  const [topCaros, setTopCaros] = useState<any[]>([]);
  const [stockBajo, setStockBajo] = useState<any[]>([]);
  const [promedios, setPromedios] = useState<any[]>([]);
  const [valorInventario, setValorInventario] = useState<number>(0);
  const [categoriasTop, setCategoriasTop] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const cargarDatos = async () => {
    setIsLoading(true);
    try {
      const resTotal = await pandoraApi.get('/producto/total');
      setTotal(resTotal.data);

      const resAbarrotes = await pandoraApi.get('/producto/abarrotes');
      setAbarrotes(resAbarrotes.data);

      const resTop = await pandoraApi.get('/producto/top3-caros');
      setTopCaros(resTop.data);

      const resStock = await pandoraApi.get('/producto/stock-menor-50');
      setStockBajo(resStock.data);

      const resPromedios = await pandoraApi.get('/producto/promedio-categorias');
      setPromedios(resPromedios.data);

      const resInventario = await pandoraApi.get('/producto/valor-inventario');
      setValorInventario(Number(resInventario.data));

      const resCategorias = await pandoraApi.get('/producto/categorias-mayor-3000');
      setCategoriasTop(resCategorias.data);

    } catch (error) {
      console.log("Error al cargar productos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const Tarjeta = ({ titulo, subtitulo, children }: { 
      titulo: string; 
      subtitulo: string; 
      children: ReactNode;
  }) => {
    return (
      <View 
          style={style.tarjeta}
      >
        <Text
          style={[ style.titulo ,
          { textAlign: 'center' }]}
        >
          { titulo }
        </Text>
        <Text
          style={[ style.sub,
          { textAlign: 'center'}]}
        >
          { subtitulo }
        </Text>

        <View 
            style={{ marginTop: 16 }}
        >
            {children}
        </View>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View 
          style={[style.pantalla, { justifyContent: 'center', alignItems: 'center' }]}
      >
        <Text 
            style={style.titulo}
        >
            Cargando...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView 
        style={style.pantalla} 
        contentContainerStyle={{ flexGrow: 1, padding: 20 }}
        refreshControl={
            <RefreshControl
                refreshing={isLoading}
                onRefresh={cargarDatos}
                tintColor={C.reload}
                colors={[ C.reload ]}
                progressBackgroundColor={ C.tarjeta }
            />
        }
    >
      <Text style={style.header}>Monitor de Productos</Text>
      <Text style={style.total}>{total} registrados</Text>

      <View style={style.filaResumen}>
        <View style={style.cajaResumen}>
          <Text style={style.sub}>Inventario Total</Text>
          <Text style={[style.valorResumen, { color: C.exito }]}>${valorInventario.toFixed(2)}</Text>
        </View>
      </View>

      <Tarjeta 
          titulo="Abarrotes" 
          subtitulo="Productos en esta categoría"
      >
        {abarrotes.slice(0, 5).map((item) => (
          <View key={item.id} style={style.fila}>
            <Text style={style.nombre}>{item.nombre}</Text>
            <Text style={[style.precio, { color: C.exito }]}>${Number(item.precio).toFixed(2)}</Text>
          </View>
        ))}
      </Tarjeta>

      <Tarjeta 
          titulo="Promedio por Categoría" 
          subtitulo="Precio medio"
      >
        {promedios.map((item) => (
          <View key={item.categoria} style={style.fila}>
            <Text style={[style.nombre, { color: C.categoria }]}>{item.categoria}</Text>
            <Text style={style.precio}>${Number(item.promedio).toFixed(2)}</Text>
          </View>
        ))}
      </Tarjeta>


      <Tarjeta 
          titulo="Top 3 caros" 
          subtitulo="Mayor valor"
      >
        {topCaros.map((item, index) => (
          <View key={item.id} style={style.fila}>
            <Text style={[style.nombre, { color: C.estrella }]}>{index + 1}. {item.nombre}</Text>
            <Text style={[style.precio, { color: C.precio }]}>${Number(item.precio).toFixed(2)}</Text>
          </View>
        ))}
      </Tarjeta>

      <Tarjeta titulo="Stock Crítico" subtitulo="Menos de 50 unidades">
        <BarChart
          data={stockBajo.slice(0, 5).map(item => ({
            value: item.stock,
            label: item.nombre//.substring(0, 7)
          }))}
          width={width - 160}
          adjustToWidth
          height={180}
          barWidth={35}
          initialSpacing={10}
          endSpacing={10}
          noOfSections={3}
          barBorderRadius={6}
          frontColor={C.precio}
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisTextStyle={{ color: C.suave }}
          xAxisLabelTextStyle={{ color: C.suave, fontSize: 9 }}
          isAnimated
        />
      </Tarjeta>

      <Tarjeta titulo="Categorías Valiosas" subtitulo="Inventario mayor a $3000">
        <View style={{ alignItems: 'center', paddingVertical: 10 }}>
          <PieChart
            data={categoriasTop.map((item, index) => {
              const colores = [C.exito, C.estrella, C.precio, C.categoria, C.info];
              return {
                value: Number(item.total_inventario),
                color: colores[index % colores.length],
                text: item.categoria
              };
            })}
            donut
            radius={90}
            innerRadius={60}
            innerCircleColor={C.tarjeta}
            centerLabelComponent={() => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: C.suave }}>Total</Text>
                <Text style={{ fontSize: 16, color: C.texto, fontWeight: 'bold' }}>
                  ${categoriasTop.reduce((acc, item) => acc + Number(item.total_inventario), 0).toFixed(0)}
                </Text>
              </View>
            )}
          />

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20, gap: 15 }}>
            {categoriasTop.map((item, index) => {
              const colores = [C.exito, C.estrella, C.categoria, C.info, C.precio, '#fde047']; 
              return (
                <View key={item.categoria} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: colores[index % colores.length], marginRight: 6 }} />
                  <Text style={{ color: C.suave, fontSize: 12 }}>{item.categoria}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </Tarjeta>


    </ScrollView>
  );
};

const style = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: C.fondo },
  header: { color: C.texto, fontSize: 13 },
  total: { color: C.texto, fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  titulo: { color: C.texto, fontSize: 17, fontWeight: 'bold' },
  sub: { color: C.suave, fontSize: 13, marginTop: 4 },
  tarjeta: { 
      backgroundColor: C.tarjeta, 
      borderColor: C.borde, 
      borderRadius: 16, 
      borderWidth: 2, 
      padding: 16, 
      marginTop: 10,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      elevation: 4,
  },
  fila: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      borderBottomWidth: 1, 
      borderBottomColor: C.borde, 
      paddingVertical: 12 
  },
  nombre: { color: C.texto, fontSize: 15, fontWeight: '600' },
  precio: { fontSize: 16, fontWeight: 'bold' },
  filaResumen: { flexDirection: 'row', marginBottom: 16 },
  cajaResumen: { 
      flex: 1, 
      backgroundColor: C.tarjeta, 
      borderColor: C.borde, 
      borderRadius: 16, 
      borderWidth: 1, 
      padding: 16, 
      borderTopWidth: 4, 
      borderTopColor: C.exito },
  valorResumen: { fontSize: 22, fontWeight: 'bold', marginTop: 4 },
});
