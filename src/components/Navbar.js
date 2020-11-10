import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import * as trackerActions from '../actions/trackerActions'
import dayNight from '../resources/dayNight.png'

const Navbar = () => {
  const {counter} = useSelector(store => store.trackerReducer)
  const dispatch = useDispatch()

  
  return (
      <nav>
        <ul>
          <div className="nav-title">
            <li><Link to='/' className="navTitle" >PokeTracker</Link></li>
          </div>
          
          <div className="nav-links">
          <div className="darkMode">
            <img src={dayNight} alt=""/>
          </div>
            <li className="catched">catched: {counter}</li>
            <div className="dropdown">
              <button className="dropbtn">Generation</button>
              <div className="dropdown-content">
                <Link 
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(1, 1))}>
                  gen 1
                </Link>

                <Link 
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(2, 152))}>
                  gen 2
                </Link>

                <Link 
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(3, 252))}>
                  gen 3
                </Link>

                <Link 
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(4, 387))}>
                  gen 4
                </Link>

                <Link 
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(5, 494))}>
                  gen 5
                </Link>

                <Link 
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(6, 650))}>
                  gen 6
                </Link>

                <Link 
                className="Link"
                to='/tracker'
                onClick={e => dispatch(trackerActions.getPokemons(7, 722))}>
                  gen 7
                </Link>

                <Link 
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
