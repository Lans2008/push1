fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((data) => data.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
