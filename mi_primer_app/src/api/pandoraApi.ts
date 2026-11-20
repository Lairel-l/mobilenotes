import axios from "axios";

export const pandoraApi = axios.create({
  baseURL: "http://192.168.143.172:3000",
});

export const setPandoraIp = (ip: string) => {
  const cleanIp = ip.trim();
  if (cleanIp) {
    pandoraApi.defaults.baseURL = `http://${cleanIp}:3000`;
  }
};
