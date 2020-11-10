import axios from 'axios'
import { 
  ERROR, 
  LOADING, 
  GET_POKEMONS, 
  CATCHED, 
  INCREMENT_COUNTER, 
  DECREMENT_COUNTER, 
  FROM, 
  GENERATION, 
  COUNTER
} from '../types/trackerTypes'

export const getPokemons = (gen, from) => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  })

  try {
    /**
     * Refresh:
     * when refresh gen and from value are lost, so we get them from the localStorage
     * parseInt() because only strings can be storaged in the localStorage API
     */
    if(gen === undefined && from === undefined && localStorage.getItem('generation')){
      gen = parseInt(localStorage.getItem('generation'))
      from = parseInt(localStorage.getItem('startFrom'))
    }
    const res = await axios.get(`https://pokeapi.co/api/v2/generation/${gen}/`)

    const pokemons = []
    if (gen >= 2 && gen <= 7) {
      res.data.pokemon_species.map((poke, i) => (
        pokemons[i] = {
          ...pokemons[i],
          catched: false,
          id: i+from,
          img: `https://db.pokemongohub.net/images/official/detail/${i+from}.png`
        }
      ))
    } else if (gen === 8) {
      res.data.pokemon_species.map((poke, i) => (
        pokemons[i] = {
          ...pokemons[i],
          catched: false,
          id: i+from,
          img: `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${i+from}.png`
        }
      ))
     
    } else {
      res.data.pokemon_species.map((poke, i) => (
        pokemons[i] = {
          ...pokemons[i],
          catched: false,
          id: i+from,
          img: `https://pokeres.bastionbot.org/images/pokemon/${i+from}.png`
        }
      ))
    }


    if(parseInt(localStorage.getItem('catchedGen')) === gen) {
      // console.log('catchedounter', JSON.parse(localStorage.getItem('catchedPokemons')))
      
      dispatch({
        type: GET_POKEMONS,
        payload: JSON.parse(localStorage.getItem('catchedPokemons'))
      })

    } else {
      dispatch({
        type: GET_POKEMONS,
        payload: pokemons
      })

      dispatch({
        type: COUNTER,
        payload: 0
      })
    }

    dispatch({
      type: GENERATION,
      payload: gen
    })
  
    dispatch({
      type: FROM,
      payload: from
    })

    
    
    
  } catch (error) {
    console.log('error: ', error.message)
    dispatch({
      type: ERROR,
      payload: 'Sorry. Page Not Found.'
    })
  }
}

export const catchPokemon = (id) => (dispatch, getState) => {
  const {pokemonEntries, generation} = getState().trackerReducer;
  const selected = pokemonEntries[id]

  const updated = [
    ...pokemonEntries
  ]

  updated[id] = {
    ...pokemonEntries[id],
    catched: !selected.catched
  }


  //localStorage 
  localStorage.setItem("catchedPokemons", JSON.stringify(updated))
  localStorage.setItem("catchedGen", generation)

  dispatch({
    type: CATCHED,
    payload: updated
  })

}

export const incrementCounter = (id) => (dispatch, getState) => {
  const {pokemonEntries} = getState().trackerReducer;

  if (pokemonEntries[id].catched) {
    dispatch({
      type: INCREMENT_COUNTER
    })
  }
  
}

export const decrementCounter = (id) => (dispatch, getState) => {
  const {pokemonEntries} = getState().trackerReducer;

  if (!pokemonEntries[id].catched) {
    dispatch({
      type: DECREMENT_COUNTER
    })
  }
}

export const getCounterValue = () => (dispatch, getState) => {
  const pokemons = JSON.parse(localStorage.getItem('catchedPokemons'))
  
  let count = 0
  
  for (let index = 0; index < pokemons.length; index++) {
    
    if (pokemons[index].catched === true) {
      count++
    }
  }

  dispatch({
    type: COUNTER,
    payload: count
  })
}

// if ([id].catched) {
//   return dispatch({
//     type: INCREMENT_COUNTER
//   })