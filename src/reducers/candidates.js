import { RECIEVE_CANDS } from "../actions/candidates";

export default function candidates(state={}, action){
    switch(action.type){
        case RECIEVE_CANDS:
            return action.candidates
        default:
            return state
    }
}