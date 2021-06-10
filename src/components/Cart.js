import {useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../redux/cartReducer'
import { useHistory } from 'react-router-dom'
import '../Checkout'

const Cart = (props) => {
  const {cart} = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch()
  console.log(props)
  const{push} = useHistory()

  useEffect(() => {
    axios.get('/api/cart')
    .then((res) => {
      console.log(res.data)
      dispatch(setCart(res.data))
    })
    .catch(err => {
      console.log(err)
      if(err.response.status === 511){
        push('/auth')
      }
    })
  }, [dispatch])

  const handleDeleteFromCart = (item_id) => {
    axios.delete(`/api/cart/${item_id}`)
    .then((res) => {
      dispatch(setCart(res.data))
    })
    .catch(err => {
      console.log(err)
      if(err.response.status === 511){
        push('/auth')
      }
    })
  }

  const handleChangeQty = (item_id, quantity) => {
    
    if(quantity <= 0){
      handleDeleteFromCart(item_id)
    }else{
      axios.put(`/api/cart/${item_id}`, {quantity})
      .then(res => {
        dispatch(setCart(res.data))
      })
      .catch(err => {
        console.log(err)
        if(err.response.status === 511){
          push('/auth')
        }
      })
    }
  }

  return(
    <div>
      <div className='cart'>Cart</div>
      {cart.map((item) => {
        console.log(item)
        return(
          <div className='purchase' key={item.product_cart_id}>
            <h4>{item.item_name}</h4>
            <h5>Qty: {item.quantity}</h5>
            <button onClick={() => handleChangeQty(item.item_id,item.quantity - 1)}>-</button>
            <button onClick={() => handleDeleteFromCart(item.item_id)}>delete</button>
            <button onClick={() => handleChangeQty(item.item_id, item.quantity + 1)}>+</button>
          </div>
        )
      })}
    </div>
  )
}

export default Cart