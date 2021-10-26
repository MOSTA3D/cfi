import { RECIEVE_THREADS } from "../actions/threads";

export default function threads(state={}, action){
    switch(action.type){
        case RECIEVE_THREADS:
            return action.threads
        default:
            return state
    }
}