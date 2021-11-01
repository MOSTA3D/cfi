import { SIGNUP } from "../actions/users";

export default function users(state={}, action){

    switch(action.type){
        case SIGNUP:
            return{
                ...state,
                [action.user.username]:action.user
            }
        default:
            return state
    }
}