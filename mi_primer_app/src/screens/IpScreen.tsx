import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { pandoraApi } from "../api/pandoraApi";

export const IpScreen = () => {
  const { authState, changeIp } = useContext(AuthContext);
  const [ipText, setIpText] = useState(authState.ip);

  const handleSaveIp = () => {
    const cleanIp = ipText.trim();
    changeIp(cleanIp);
    pandoraApi.defaults.baseURL = `http://${cleanIp}:3000`;
    Alert.alert("IP actualizada", `Conectando a: http://${cleanIp}:3000`);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#F7F8EE" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        Configurar IP del Servidor
      </Text>
      <Text style={{ marginBottom: 12, color: "#555" }}>
        IP actual: {authState.ip}
      </Text>

      <TextInput
        value={ipText}
        onChangeText={setIpText}
        placeholder="Ej. 192.168.1.50"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "#2E6F40",
          borderRadius: 10,
          padding: 12,
          marginBottom: 16,
          backgroundColor: "#FFF",
        }}
      />

      <TouchableOpacity
        onPress={handleSaveIp}
        style={{
          backgroundColor: "#2E6F40",
          padding: 14,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}>
          Guardar IP
        </Text>
      </TouchableOpacity>
    </View>
  );
};
