import { getThreads } from "../utils/herlper";

export const RECIEVE_THREADS = "RECIEVE_THREADS";

function recieveThreads(threads){
    return{
        type: RECIEVE_THREADS,
        threads
    }
}

export function handleRecieveThreads(){
    return (dispatch, getState)=>{
        getThreads().then(threads=>dispatch(recieveThreads(threads)))
    }
}