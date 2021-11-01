import { getCands } from "../utils/herlper";

export const RECIEVE_CANDS = "RECIEVE_CANDS";
function recieveCands(candidates){
    return {
        type: RECIEVE_CANDS,
        candidates
    }
}

export function handleRecieveCands(){
    getCands().then(cands=>console.log("this is from", cands));
    return (dispatch, getState)=>{
        getCands().then(cands=>dispatch(recieveCands(cands)));
    }
}