import logo from './logo.svg';
import './App.css';
import{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setUser} from './redux/authReducer'
import {setCart} from './redux/cartReducer'
import axios from 'axios'
import Header from './components/Header'
import routes from './routes'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('/auth/me')
    .then(res => {
      dispatch(setUser(res.data.user))
      dispatch(setCart(res.data.cart))
    })
    .catch((err) => {
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

export default App;
