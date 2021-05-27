const initialState = {
    cart: []
}

const set_cart = 'set_cart'

export function setCart(cart){
    return{
        type: set_cart,
        payload: cart
    }
}

export default function cartReducer(state = initialState, action){
    switch(action.type){
        case set_cart:
            return{...state, cart: action.payload}
        default:
            return {...state}
    }
}