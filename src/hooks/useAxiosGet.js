import { useState, useEffect } from 'react';
import AxiosApi from '../services/api';

const useAxiosGet = (url, callBackFunc = null) => {
       const [data, setData] = useState(null);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState(null);

       useEffect(() => {
              const controller = new AbortController();
              const fetchData = async () => {
                     setLoading(true);
                     setError(null);
                     try {
                            const response = await AxiosApi.get(url, {
                                   signal: controller.signal,
                            });
                            setData(response.data)
                            setLoading(false);
                            if (callBackFunc) {
                                   callBackFunc(response.data.value)
                            }
                     }
                     catch (err) {
                            if (err.code === "ERR_CANCELED") {
                                   console.log('Request cancelled');
                            } else {
                                   setError(err);
                            }
                     }
              };

              fetchData();

              return () => controller.abort(); // clean up
       }, [url]);

       return [data, loading, error];
};

export default useAxiosGet;