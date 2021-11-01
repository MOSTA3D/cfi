import { ERROR, REMOVE_ERR } from "../actions/users";

export default function error(state=null, action){
    switch(action.type){
        case ERROR:
            return action.err
        case REMOVE_ERR:
            return null
        default:
            return state;
    }
}