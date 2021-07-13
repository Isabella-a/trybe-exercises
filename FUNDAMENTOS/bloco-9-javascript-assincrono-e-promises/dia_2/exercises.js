// EXERCÍCIO 1
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => 
      document.querySelector('#jokeContainer').innerText = data.joke);
};
// window.onload = () => fetchJoke();

//==========================================================================

// EXERCÍCIO 2
const fetchPromise = () => {
const promise = new Promise((resolve, reject) => {
  let array = [];
  for (let index = 0; index < 10; index += 1) {
    array.push(Math.round(Math.random() * 50));
  };
  const arrayAoQuadrado = array.map((item) => item ** 2);
  const sum = arrayAoQuadrado.reduce(((acc, curr) => acc += curr), 0);
  console.log(sum);
  
  (sum < 8000) ? resolve() : reject();

});
promise
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();

