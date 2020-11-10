import React, {useEffect} from 'react'
// import axios from 'axios'

const PokeTracker = () => {
  // const [info, setInfo] = useState()
  // const [pokeEnt, setPokeEnt] = useState()
  // const [region, setRegion] = useState('kalos-central')
  // const [sprite, setSprite] = useState()
  // const [names, setName] = useState()



  // const getPokemon = (e, name) => {
  //   // e.preventDefault()
  //   console.log(name)
  //   axios.get(`https://pokeapi.co/api/v2/pokedex/1/`)
  //   // axios.get('https://pokeapi.co/api/v2/generation/1/')
  //   .then(res => {
  //     if(res) {
  //       console.log(res.data)
  //       setPokeEnt(res.data.pokemon_entries)
  //     }
  //   })
  // }


  useEffect(() => {
    // getPokemon()
    //destroy generation and strarFrom from localStorage because if we go to a "gen route" it will kept the previous value
    localStorage.removeItem('generation')
    localStorage.removeItem('startFrom')
  }, [])


  return (
    
    <div>
      <h1 className="text-center">All Pokemons</h1>
      <form>
        {/* <select name="region" onChange={e => setRegion(e.target.value)}>
        <option value="kalos-central">Kalos-Central</option>
        <option value="kalos-coastal">Kalos-Coastal</option>
        <option value="kalos-mountain">Kalos-Mountain</option>
        </select>
        <button onClick={e => getPokemon(e, region)}>Kalos</button> */}

      </form>
      
        <h1>MAIN PAGE</h1>

      {/* {pokeEnt 
      ? <div className="pokemons">
        {pokeEnt.map(({entry_number, pokemon_species}) => (
          <div className="pokemon" key={entry_number}>
            <p>{pokemon_species.name} #{entry_number}</p>
            <img className="pokeImg" src={`https://pokeres.bastionbot.org/images/pokemon/${entry_number}.png`} alt=""/>
          </div>
        ))}
      </div> 
      : null} */}

    </div>
  )
}

export default PokeTracker
