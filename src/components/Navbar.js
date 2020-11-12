import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import * as trackerActions from '../actions/trackerActions'
import dayNight from '../resources/dayNight.png'

const Navbar = () => {
  const {counter, darkTheme} = useSelector(store => store.trackerReducer)
  const dispatch = useDispatch()

  const toDark = () => {
    dispatch(trackerActions.changeTheme())
 
  }
  
  return (
      <nav style={{
        backgroundColor: darkTheme ? '#1c2228' : 'red',
        color: darkTheme? '#c4d2e1' : 'white'
        }}>
        <ul>
          <div className="nav-title" >
            <li><Link to='/' className="navTitle" style={{ color: darkTheme ? '#c4d2e1' : 'white'}}>PokeTracker</Link></li>
          </div>
          
          <div className="nav-links">
          <div className="darkMode">
            <img onClick={toDark} src={dayNight} alt=""/>
          </div>
            <li className="catched">Counter: {counter}</li>
            {/* <li className="catched">catched: {counter}</li> */}
            <div className="dropdown">
              <button className="dropbtn" style={{
                backgroundColor: darkTheme ? '#1c2228' : 'red',
                color: darkTheme? '#c4d2e1' : 'white'}}>Generation</button>
              <div className="dropdown-content">
                <Link 
                style={{
                  backgroundColor: darkTheme ? '#1c2228' : 'red',
                  color: darkTheme ? '#c4d2e1': 'white'}}
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(1, 1))}>
                  gen 1
                </Link>

                <Link
                style={{
                  backgroundColor: darkTheme ? '#1c2228' : 'red',
                  color: darkTheme ? '#c4d2e1': 'white'}}
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(2, 152))}>
                  gen 2
                </Link>

                <Link 
                style={{
                  backgroundColor: darkTheme ? '#1c2228' : 'red',
                  color: darkTheme ? '#c4d2e1': 'white'}}
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(3, 252))}>
                  gen 3
                </Link>

                <Link 
                style={{
                  backgroundColor: darkTheme ? '#1c2228' : 'red',
                  color: darkTheme ? '#c4d2e1': 'white'}}
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(4, 387))}>
                  gen 4
                </Link>

                <Link 
                style={{
                  backgroundColor: darkTheme ? '#1c2228' : 'red',
                  color: darkTheme ? '#c4d2e1': 'white'}}
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(5, 494))}>
                  gen 5
                </Link>

                <Link 
                style={{
                  backgroundColor: darkTheme ? '#1c2228' : 'red',
                  color: darkTheme ? '#c4d2e1': 'white'}}
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(6, 650))}>
                  gen 6
                </Link>

                <Link 
                style={{
                  backgroundColor: darkTheme ? '#1c2228' : 'red',
                  color: darkTheme ? '#c4d2e1': 'white'}}
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(7, 722))}>
                  gen 7
                </Link>

                <Link 
                style={{
                  backgroundColor: darkTheme ? '#1c2228' : 'red',
                  color: darkTheme ? '#c4d2e1': 'white'}}
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(8, 810))} >
                  gen 8
                </Link>
            
              </div>
            </div>
{/* 
            <li><Link 
              to='/tracker'
              onClick={e => dispatch(trackerActions.getPokemons(1, 1))} 
              style={{ textDecoration: 'none', color: 'white' }}>gen 1</Link>
            </li> */}
            {/* <li><Link 
              to='/tracker'
              onClick={e => dispatch(trackerActions.getPokemons(2, 152))} 
              style={{ textDecoration: 'none', color: 'white' }}>gen 2</Link>
            </li>
            <li><Link 
              to='/tracker'
              onClick={e => dispatch(trackerActions.getPokemons(3, 252))} 
              style={{ textDecoration: 'none', color: 'white' }}>gen 3</Link>
            </li> */}
            {/* <li><Link 
              to='/tracker'
              onClick={e => dispatch(trackerActions.getPokemons(4, 387))} 
              style={{ textDecoration: 'none', color: 'white' }}>gen 4</Link>
            </li>
            <li><Link 
              to='/tracker'
              onClick={e => dispatch(trackerActions.getPokemons(5, 494))} 
              style={{ textDecoration: 'none', color: 'white' }}>gen 5</Link>
            </li>
            <li><Link 
              to='/tracker'
              onClick={e => dispatch(trackerActions.getPokemons(6, 650))} 
              style={{ textDecoration: 'none', color: 'white' }}>gen 6</Link>
            </li>
            <li><Link 
              to='/tracker'
              onClick={e => dispatch(trackerActions.getPokemons(7, 722))} 
              style={{ textDecoration: 'none', color: 'white' }}>gen 7</Link>
            </li>
            <li><Link 
              to='/tracker'
              onClick={e => dispatch(trackerActions.getPokemons(8, 810))} 
              style={{ textDecoration: 'none', color: 'white' }}>gen 8</Link>
            </li> */}
          </div>
        </ul>
      </nav>
  )
}

export default Navbar
