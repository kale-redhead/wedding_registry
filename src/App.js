import React, {useState, useEffect} from 'react'
import './App.css';
import routes from './routes'
import Header from './components/Header'
import {useDispatch} from 'react-redux'
import {setUser} from './redux/authReducer'
import {setCart} from './redux/cartReducer'
import axios from 'axios'
import Items from './components/Items';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('/auth/me').then(res => {
      dispatch(setUser(res.data.user))
      dispatch(setCart(res.data.cart))
    }).catch((err) => {
      console.log(err.response)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App