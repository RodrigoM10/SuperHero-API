/**Esta funcion recibe un objeto con las propiedades {key, value} */
export function saveToLocalStorage(objeto) {
    const datosJson = JSON.stringify(objeto.value); // Convertir datos al formato JSON.
    localStorage.setItem(objeto.key, datosJson); // Guardar en localStorage.
  }
  // esta funcion solo recibe la clave de lo que queire leer de local storage
  export function readFromLocalStorage(key) {
    const json = localStorage.getItem(key);
    const data = JSON.parse(json);
    return data;
  }
  