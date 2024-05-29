import { useState, useEffect, useCallback } from "react";

const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Request failed!");
  }
  return data;
};

const useHttpFetch = (url, config, initialData) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback(
    async (body) => {
      setIsLoading(true);
      try {
        const data = await sendHttpRequest(url, { ...config, body: body });
        console.log("hook data :>> ", data);
        setData(data);
      } catch (error) {
        console.log("error :>>", error);
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );
  const clearData = () => {
    setData(initialData);
  };

  useEffect(() => {
    if (config && (config.method === "GET" || !config.method || !config)) {
      sendRequest();
    }
  }, [sendRequest,  ]);
 
  return {
    data,
    error,
    isLoading,
    sendRequest,
    clearData,
  };
};
export default useHttpFetch;
