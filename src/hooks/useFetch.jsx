import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url, initialState = {}) {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        setData(res.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        alert('Hubo un error en la conexión al servidor ');
      }
    })();
  }, [url]);

  return [data, isLoading];
}

export function useFetchSearch(name) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      if (name === '') {
        setData([]);
        return;
      }
      try {
        setIsLoading(true);
        const res = await axios.get(`/search/${name}`);
        setData(res.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        alert('Hubo un error en la conexión al servidor ');
      }
    })();
  }, [name]);

  return [data, isLoading];
}
