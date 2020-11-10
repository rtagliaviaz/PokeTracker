import { LOADING, ERROR, GET_POKEMONS, CATCHED, INCREMENT_COUNTER, DECREMENT_COUNTER, FROM, GENERATION, COUNTER} from '../types/trackerTypes'

const INITIAL_STATE = {
  loader: false,
  error: '',
  counter: 0,
  pokemonEntries: [],
  generation: '',
  startFrom: ''
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case GET_POKEMONS:
      return {
        ...state,
        pokemonEntries: action.payload,
        loader: false,
        error: ''
      }

    case COUNTER:
      return{
        ...state,
        counter: action.payload
      }
    
    case FROM:
      return {
        ...state,
        startFrom: action.payload
      }

    case GENERATION:
      return {
        ...state,
        generation: action.payload
      }

    case CATCHED:
      return {
        ...state,
        pokemonEntries: action.payload,
        loader: false,
        error: ''
      }

    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }

    case DECREMENT_COUNTER:
      return{
        ...state,
        counter: state.counter - 1
      }

    case LOADING:
      return {
        ...state,
        loader: true
      }

    case ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload
      }
    
    default: return state
  }
}