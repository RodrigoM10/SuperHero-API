import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url, initialState = {}) {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try{
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

// export function useFetchAll(url) {
//   const [data, isLoading] = useFetch(url);
//   const [allData, setAllData] = useState([]);
//   const [isAnyLoading, setIsAnyLoading] = useState(true);

//   useEffect(() => {
//     if (isLoading) return;

//     (async function () {
//       setIsAnyLoading(true);
//       const promises = axios.get(url);
//       const allResponses = await Promise.all(promises);
//       const allResults = allResponses.reduce((acc, curr) => ([...acc, ...curr.data.results]), [])
//       setAllData(allResults);
//       setIsAnyLoading(false);
//     })();
//   }, [url, data, isLoading]);

//   return [allData, isAnyLoading];
// }
