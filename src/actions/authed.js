export const LOGIN = "LOGIN";

function login(user){
    return {
        type:LOGIN,
        user,
    }
}

export default function handleLogin(credintials){
    return function(dispatch, getState){
        fetch("http://localhost:8080", {
            method: "POST",
            credintials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credintials)
        }).then(user=>dispatch(login(user))).catch(err=>console.error(err));
    }
}