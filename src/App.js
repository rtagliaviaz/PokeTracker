import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'

//components
import PokeTracker from './components/PokeTracker'
import Navbar from './components/Navbar'
import Kanto from './components/Kanto'


const App = () => {
  const {darkTheme } = useSelector(store => store.trackerReducer)

  {darkTheme ? document.body.style.background='#23292f': document.body.style.background='white'}
  return (
    
    <div style={{
      backgroundColor: darkTheme ? '#23292f' : 'white'
      }}>
    <BrowserRouter>
      <Navbar />
      <div >
        <Route exact path='/' component={PokeTracker}/>
        <Route exact path='/tracker' component={Kanto} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
