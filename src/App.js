import {useState, useEffect} from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])

  return (
    <div className="App">
      <h3>I choose you: {pokemon}</h3>
      {['bulbasaur', 'charmander', 'squirtle'].map((v,i) => {
        return(<button key={i} onClick={() => setPokemon(v)}>{v}</button>)
      })}
    </div>
  );
}

export default App;
