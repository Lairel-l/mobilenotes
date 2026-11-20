import { useEffect, useState, useContext, useCallback } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { AuthContext } from "../context/AuthContext";
import { DataResponse } from "../interfaces/pandoraApiRest";

interface UseDataResponse {
  data: DataResponse | undefined;
  isLoading: boolean;
  loadData: () => Promise<void>;
}

export const useDataResponse = (): UseDataResponse => {
  const { authState } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataResponse>();

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      const urlApi = `http://${authState.ip}:3000/sensors/consultas/data`;
      const response = await pandoraApi.get<DataResponse>(urlApi);
      setData(response.data);
    } catch (error) {
      console.log("Error al cargar datos del sensor:", error);
    } finally {
      setIsLoading(false);
    }
  }, [authState.ip]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { isLoading, data, loadData };
};
