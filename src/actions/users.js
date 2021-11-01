import { addUser } from "../utils/herlper";
import { users } from "../utils/data";

export const ERROR = "ERROR";
export const SIGNUP = "SIGNUP";
export const REMOVE_ERR = "REMOVE_ERR";

function signUp(user){
    return {
        type: SIGNUP,
        user,
    }
}

function error(err){
    return {
        type: ERROR,
        err
    }
}

export function removeError(){
    return {
        type: REMOVE_ERR,
    }
}

export function handleSignUp(user){
    return (dispatch)=>{
        addUser(user)
        .then(user=>dispatch(signUp(user)))
        .catch(message=>{
            alert(message);
            // document.body.innerHTML = message;
        });
    }
}