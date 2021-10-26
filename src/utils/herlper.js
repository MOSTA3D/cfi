
import { candidates, threads } from "./data";

// start testing helper functions

function getData(data){
    return new Promise(res=>{
        setTimeout(()=>res(data), 1000)
    })
}

export function getCands(candidates){
    getData(candidates);
}
export function getThreads(threads){
    getData(threads);
}

export async function asyncLogin(credintials){
    const response = await fetch("http://localhost:8081", {
        method: "POST",
        credintials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credintials)
    });

    try{
        const newData = await response.json();
        return newData;
    }catch(err){
        console.error(err);
    }
}

