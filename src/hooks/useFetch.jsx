import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(id) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await axios.get(`/${id}`);
        setData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        alert('Hubo un error en la conexión al servidor ');
      }
    })();
  }, [id]);

  return [data, isLoading];
}

export function useFetchSearch(name) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      if (name === '' || name === null) {
        setData([]);
        setIsLoading(false);
        return;
      }
      if (name.length >= 2) {
        try {
          setIsLoading(true);
          const res = await axios.get(`/search/${name}`);
          setData(res.data.results);
          setIsLoading(false);
        }
        catch (error) {
          console.error(error);
          alert('Hubo un error en la conexión al servidor ');
        }
      }
    })();
  }, [name]);

  return [data, isLoading];
}
