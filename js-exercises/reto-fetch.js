const urlToFetch = 'https://jsonplaceholder.typicode.com/posts';

async function useFetch() {

  const response = await fetch(urlToFetch);
  const data = await response.json();
  console.log(data);
}

async function fetchAgain() {

  console.log("Iniciando la solicitud a la API...");

  const data = await fetch(urlToFetch).then(response => response.json());

  setTimeout(() => {
    
    console.log("Datos obtenidos de la API: ");
    console.log(data);
  }, 2000);
}

fetchAgain();