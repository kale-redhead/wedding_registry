import {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'

const Items = (props) => {
    const [items, setItems] = useState([])
    const {user} = useSelector((registry) => registry.auth)
    const {cart} = useSelector((registry) => registry.cartReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/api/items')
        .then((res) => {
            setItems(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleAddToCart = (item_id) => {
        const item = cart.find((item) => item.item_id === item_id)
        console.log(item)

        if(!item){
            axios.post(`/api/cart/${item_id}`)
            .then((res) => {
                dispatch(setCart(res.data))
            })
            .catch((err) => {
                console.log(err)
                if(err.response.status === 511){
                    props.history.push('/auth')
                }
            })
        }
        else{
            axios.post(`/api/cart/${item_id}`, {quantity: item.quantity + 1})
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
    }
    return(
        <div>
            <h1>Items Page</h1>
            {items.map((item) => {
                return(
                    <div key={item.item_id}>
                        <h4>{item.item_name}</h4>
                        <p>{item.item_description}</p>
                        {user && 
                        <button onClick={() => 
                        handleAddToCart(item.item_id)}>Add To Cart</button>}
                    </div>
                )
            })}
        </div>
    )
}

export default Items