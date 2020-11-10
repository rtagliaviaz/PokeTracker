import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

//components
import PokeTracker from './components/PokeTracker'
import Navbar from './components/Navbar'
import Kanto from './components/Kanto'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route exact path='/' component={PokeTracker}/>
        <Route exact path='/tracker' component={Kanto}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
