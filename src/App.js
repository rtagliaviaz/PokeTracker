import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
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
      <HashRouter basename="/">
        <Navbar />
        <div >
          <Route exact path='/' component={PokeTracker}/>
          <Route exact path='/tracker' component={Kanto} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
