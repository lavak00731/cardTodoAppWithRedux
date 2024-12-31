import { LOGIN } from "../Constants/reducerConstans";
import { LOGOUT } from "../Constants/reducerConstans";

interface initialStateInt { 
    user: string,
    isLogged: boolean,
}

interface actionInt {
    type: string,
    payload: string,
}

const initialState:initialStateInt = {
    user: '',
    isLogged: false,
}

const loginReducer = (state = initialState, action:actionInt)=>{ 
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                isLogged: true
            }
        case LOGOUT:
            return {
                ...state,
                user: '',
                isLogged: false
            }
        default:
            return state;
    }
}
export default loginReducer;