import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

//actions
import * as trackerActions from '../actions/trackerActions'

//components
import Spinner from './General/Spinner'
import Error from './General/Error'

//resources
import pokeball from '../resources/pokeball.png'
import pokeballSprite from '../resources/pokeballSprite.png'


const Kanto = () => {
  //useSelector and useDispatch
  const {pokemonEntries, loader, error, counter, generation, startFrom } = useSelector(store => store.trackerReducer)
  const dispatch = useDispatch()

  //useState
  const [useSprites, setUseSprites] = useState(false)

  const showContent = () => {
    if (loader) {
      return <Spinner />
    }

    if (error && generation===undefined) {
      return <Error message={error} />
    }
   
    return (
      <div className="pokemonsContainer">
        <h1 className="catchedTracker">Catched: {counter}</h1>
        <div className="spritesButton">
          <button className="spritesButton" onClick={wantSprites}>
            {!useSprites ? 'Sprites' : 'Models' }
          </button>
        </div>
        <div className="pokemons">
          {Object.keys(pokemonEntries).map((slot) => (
            <React.Fragment key={slot}>
              {setPokemon(slot)}
            </React.Fragment>
          ))}
        </div>
      </div>
    )

  }

  const wantSprites = () => {
    setUseSprites(!useSprites)
  }

  const setPokemon = (slot) => {
    const pokemon = pokemonEntries[slot]
    
    return(
      <div key={pokemon.id} onClick={e=>getPokemonId(slot)} className="pokemon">
        {/* <p>#{pokemon.id}</p> */}
        {pokemon.catched ? 
        <React.Fragment>
          {useSprites ? 
          <img className="pokeballSprite" src={pokeballSprite} alt=""/> :
          <img className="pokeballImg" src={pokeball} alt=""/> 
          }
        </React.Fragment>
         :  
        <React.Fragment>
          {useSprites ? 
            <img className="pokeSprites" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt=""/>  : 
            <img className="pokeImg" src={pokemon.img} alt="" />
          }
        </React.Fragment>
        }
      </div>
    )
    
  }

  //pokemon slot in the array
  const getPokemonId = (id) => {
    dispatch(trackerActions.catchPokemon(id))
    dispatch(trackerActions.incrementCounter(id))
    dispatch(trackerActions.decrementCounter(id))
  }

  // get pokemon with dispatch
  const pokeget = () => {
    dispatch(trackerActions.getPokemons())
  }

  // useEffect to get pokemons
  useEffect(() => {
    pokeget()
    dispatch(trackerActions.getCounterValue())
  }, [])

  //useEffect to save generation and startFrom values in the localStorage
  useEffect(() => {
    localStorage.setItem('generation', generation)
    localStorage.setItem('startFrom', startFrom)
  })

  return (
    <div>
      {showContent()}
    </div>
  )
}

export default Kanto

