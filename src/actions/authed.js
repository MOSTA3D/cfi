import getAuthedUser from "../utils/herlper"

export const LOGIN = "LOGIN";

function login(user){
    return {
        type:LOGIN,
        user,
    }
}

export function handleLogin(){
    return (dispatch, getState)=>{
        getAuthedUser(creds).then((user)=>dispatch(login(user)));
    }
}


// export default function handleLogin(credintials){
//     return function(dispatch, getState){
//         fetch("http://localhost:8080", {
//             method: "POST",
//             credintials: "same-origin",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(credintials)
//         }).then(user=>dispatch(login(user))).catch(err=>console.error(err));
//     }
// }