import { View, Text } from "react-native";
import { appTheme } from "../theme/appTheme";
import { useEffect, useState } from "react";

export const UseEffectScreen = ( ) => {

  const [ hora, setHora ] = useState( new Date() );
  const [ color, setColor ] = useState( '#ff3d94' );

  const colors = [ '#ff3d94', '#b5307e', '#6a2a98', '#3f1c6d', '#200b4b','#ff7092' ];

  const random = () => {
    const color = colors[ Math.floor( Math.random() * colors.length ) ];
    setColor(color);
  }

  useEffect( () => {
    const interval = setInterval( () => {
      setHora( new Date() );
    }, 1000); 

    const intervalColor = setInterval( () => {
      random();
    }, 2000);

    return () => {
        clearInterval(interval);
        clearInterval(intervalColor);
    };
  },[]);

  return(
    <View
      style={ appTheme.container }
    >
        <Text
          style={{
            ...appTheme.text,
            color: color
          }}
        >
          Fecha y hora: { hora.toLocaleString() }
        </Text>
    </View>
  );
}
