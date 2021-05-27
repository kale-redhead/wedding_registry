import {useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../redux/cartReducer'

const Cart = (props) => {
  const {cart} = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/cart')
    .then((res) => {
      console.log(res.data)
      dispatch(setCart(res.data))
    })
    .catch(err => {
      console.log(err)
      if(err.response.status === 511){
        props.history.push('/auth')
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
        props.history.push('/auth')
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
          props.history.push('/auth')
        }
      })
    }
  }

  return(
    <div>
      <h1>Cart Page</h1>
      {cart.map((item) => {
        return(
          <div key={item.item_cart_id}>
            <h4>{item.item_name}</h4>
            <h5>Qty: {item.quantity}</h5>
            <button onClick={() => handleDeleteFromCart(item.item_id)}>X</button>
            <button onClick={() => handleChangeQty(product.product_id,item.quantity - 1)}>-</button>
            <button onClick={() => handleChangeQty(item.item_id, item.quantity + 1)}>+</button>
          </div>
        )
      })}
    </div>
  )
}

export default Cart