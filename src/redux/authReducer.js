const initialState = {
    user: null
}

const set_user = 'set_user'

export function setUser(user){
    return{
        type: set_user,
        payload: user
    }
}

export default function authReducer(state = initialState, action){
    switch(action.type){
        case set_user:
            return {...state, user: action.payload}
        default:
            return {...state}
    }
}