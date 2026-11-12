import { ReactNode } from 'react';
import { View, Text, ScrollView, StyleSheet, useWindowDimensions, RefreshControl} from 'react-native';
import { useDataResponse } from '../hooks/useDataResponse';
import { BarChart, LineChart } from 'react-native-gifted-charts';
import { appTheme } from '../theme/appTheme';

const C = {
  fondo: '#fdfbf7',
  tarjeta: '#ffffff',
  borde: '#e6d5c3',
  texto: '#4a3f35',
  suave: '#9a8a7c',
  calor: '#d91e63',
  frio: '#a5d8f3',
  verde: '#b2d430',
  top: '#fb8c2c',
  morado: '#f4a7c6',
  reload: '#d91e63',
};

export const DataResponseScreen = () => {
  const { width } = useWindowDimensions();
  const { isLoading, data, loadData } = useDataResponse();

  type Fecha = Date | string;
  type Punto = { value: number, label: string };

  const hora = (f: Fecha) => {
    const d = new Date(f);
    return `${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;
  }

  const dia = (f: Fecha) => {
    const d = new Date(f);
    return `${d.getDate()}/${d.getMonth() + 1}`;
  }

  const estiloEjes = {
    xAxisLabelTextStyle: { color: C.suave, fontSize: 10 }, 
    yAxisTextStyle: { color: C.suave, fontSize: 10 },
    xAxisColor: C.borde,
    yAxisColor: C.borde,
    rulesColor: C.borde,
    noOfSections: 4,
    isAnimated: true,
  };

  const Tarjeta = ({ titulo, subtitulo, children }: {
    titulo: string;
    subtitulo: string;
    children: ReactNode;
  }) => {
    return (
      <View
        style={ style.tarjeta }
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
          { children }
        </View>
      </View>
    );
  }

  const Stat = ({ label, valor, color }: {
    label: string;
    valor: number;
    color: string;
  }) => {
    return ( 
      <View
        style={{
          ...style.stat,
          borderTopColor: color
        }}
      >
        <Text
          style={ style.sub }
        >
          { label }
        </Text>
        <Text
          style={{
            ...style.statValor,
            backgroundColor: color
          }}
        >
          { Number(valor).toFixed(1) } C
        </Text>
      </View>
    );
  }

  const GraficoLinea = ({ datos, color }: { datos: Punto[]; color: string }) => {

    const { width } = useWindowDimensions();

    return (
      <LineChart
        {...estiloEjes}
        data={datos}
        color={color}
        width={width - 122}
        adjustToWidth
        curved              
        areaChart           
        thickness={3} 
        startFillColor={color}      
        endFillColor={C.tarjeta}
        startOpacity={0.4}
        endOpacity={0.02}
        dataPointsColor={color}
        dataPointsRadius={3}
      />
    );
  };

  if(!data){
    return( 
      <View
        style={ appTheme.container }
      >
        <Text
          style={ appTheme.text }
        >
          Cargando...
        </Text>
      </View>
    );
  }

  const { total, estadistica }= data;
    //console.log("Datos de estadística:", estadistica);

  const temperatura = data.ultimasHoras.map(a => ({
    value: Number(a.temperatura_celcius),
    label: hora(a.fecha),
  }));

  const distancia = data.alertas.map(a => ({
    value: Number(a.distancia_cm),
    label: hora(a.fecha),
  }));

  const diasFrios = data.diasFrios.map(d => ({
    value: Number(d.promedio),
    label: dia(d.dia),
  }));

  const diasCalurosos = data.diasCalurosos.map(d => ({
    value: Number(d.promedio),
    label: dia(d.dia),
  }));
  
  const top = data.topTemperaturas.map((a: any, index) => ({
    value: Number(a.temperatura_celcius),
    label: `#${index + 1}`,
  }));

  const lecturasPorDia = [
    { value: data.hoy.length, color: C.verde, label: 'Hoy' },
    { value: data.ayer.length, color: C.top, label: 'Ayer' },
    { value: data.anteayer.length, color: C.morado, label: 'Antier' },
  ];

  return(
    <ScrollView
      scrollEnabled={ true }
      style={ style.pantalla }
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20
      }}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={loadData}
          tintColor={C.frio}
          colors={[ C.frio ]}
          progressBackgroundColor={ C.tarjeta }
        />
      }
    >
      <View>
        <Text style={style.header}>Monitor del sensor</Text>
        <Text style={style.sub}>{total} lecturas registradas</Text>
      </View>

      <View style={style.fila}>
        <Stat label="Promedio" valor={estadistica.temp_promedio} color={C.verde} />
        <Stat label="Mínima" valor={(estadistica as any).temp_minima} color={C.frio} />
        <Stat label="Máxima" valor={estadistica.temp_maxima} color={C.calor} />
      </View>

      <Tarjeta titulo="Temperatura" subtitulo="Últimas 6 horas (°C)">
        <GraficoLinea datos={temperatura} color={C.calor} />
      </Tarjeta>

      <Tarjeta
        titulo="Distancia"
        subtitulo={`Alertas · promedio ${Number(estadistica.dist_promedio).toFixed(1)} cm`}
      >
        <GraficoLinea datos={distancia} color={C.verde} />
      </Tarjeta>

      <Tarjeta 
        titulo="Días Fríos" 
        subtitulo="Promedio de temperatura por día"
      >
        <GraficoLinea datos={diasFrios} color={C.frio} />
      </Tarjeta>


      <Tarjeta 
        titulo="Días Calurosos" 
        subtitulo="Promedio de temperatura por día"
      >
        <GraficoLinea datos={diasCalurosos} color={C.calor} />
      </Tarjeta>

      <Tarjeta 
        titulo="Top Temperaturas" 
        subtitulo="Las más altas"
      >
        <BarChart
          data={top}
          width={width - 122}
          height={200}
          barWidth={50}
          noOfSections={4}
          frontColor={C.verde}
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisTextStyle={{ color: C.suave }}
          xAxisLabelTextStyle={{ color: C.suave, fontSize: 10 }}
          isAnimated
        />
      </Tarjeta>

      <Tarjeta
        titulo='Lecturas por día'
        subtitulo='Comparasion de registros'
      >
        <GraficoLinea datos={lecturasPorDia} color={C.morado}/>
      </Tarjeta>

    </ScrollView>
  );
}

const style = StyleSheet.create({
  pantalla: { flex:1, backgroundColor: C.fondo },
  centro: { justifyContent: 'center', alignItems: 'center' },
  header: { color: C.texto, fontSize: 13 },
  sub: { color: C.texto, fontSize: 26, fontWeight: "bold" },
  fila: { flexDirection: 'row', gap: 10 },
  stat: { flex: 1, backgroundColor: C.tarjeta, borderRadius: 12, borderTopWidth: 3, padding: 12 },
  statValor: { fontSize: 20, fontWeight: 'bold', marginTop: 4 },
  tarjeta: {
    backgroundColor: C.tarjeta,
    borderColor: C.borde,
    borderRadius: 16,
    borderWidth: 2,
    overflow: 'hidden',
    padding: 16,
    marginBottom: 16,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  titulo: { color: C.texto, fontSize: 17, fontWeight: 'bold' },
  leyenda: { flexDirection: 'row', textAlign: 'center', gap: 6 },
  punto: { width: 10, height: 10, borderRadius: 5 }
});
