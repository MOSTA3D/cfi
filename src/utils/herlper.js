export let users = {
    alaadawoud: {
      id: 'alaadawoud',
      name: 'Alaa Dawoud',
      avatarURL: "https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png",
    }
}

export let candidates = {
    alaadawoud: {
      id: 'alaadawoud',
      name: 'Alaa Dawoud',
      avatarURL: "https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png",
    },
    batman: {
      id: 'batman',
      name: 'Bat Man',
      avatarURL: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    },
    ortiga: {
      id: 'ortiga',
      name: 'Ortiga',
      avatarURL: "https://www.clipartmax.com/png/small/176-1763433_user-account-profile-avatar-person-male-icon-icon-user-account.png",
    }
  }
  
export let threads = {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'aboabo',
      for: "ortiga",
      text:"Why are u here as we know we aren't here too ?",
      timestamp: 1467166872634,
      with: ["aboabo"],
      without: ["amina", "khalil"],
      comments: [{text:"this is my comment", aid:"aboabo"}]
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'mohamedabdo',
      for: "batman",
      text: "answer that question hacker, r u palying with u ?",
      timestamp: 1468479767190,
      with: ["aboabo", "mika"],
      without: ["amina","cony", "khalil"],
      comments: [{text:"this is my comment", aid:"aboabo"}]
    },
    "am8ehyc8byjqgar0jgpub9": {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'mohamedabdo',
      for: "alaadawoud",
      text: "You better have a question for this answer .",
      timestamp: 1488579767190,
      with: [],
      without: ["amina", "khalil"],
      comments: [{text:"this is my comment", aid:"aboabo"}]
    },
    "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'mohamedabdo',
    for: "batman",
    text: "I'm not playing with you here, I'm playing with him.",
    timestamp: 1482579767190,
    with: ["aboabo"],
    without: ["amina", "khalil"],
    comments: [{text:"this is my comment", aid:"aboabo"}]
    },
    }

    console.log("sometign")
console.log("the users are ", users);
const someUsers = users;
// start testing helper functions

const x = 5;
function getData(data){
    return new Promise(res=>{
        setTimeout(()=>res(data), 1000)
    })
}

export function getCands(){
    return getData(candidates);
}
export function getThreads(){
    return getData(threads);
}

function srchUsrNm(usrs, crds){
    return new Promise((res, rej)=>{
        for(const usr of usrs){
            if(usr.id===crds.username){
                return res(usr, crds.password);
            }
            return rej("username doesn't match our fake DB.");
        }
    });
}

function srchPswrd(usr, pswrd){
    return new Promise((res, rej)=>{
        if(usr.password===pswrd){
            return res(usr);
        }
        return rej("password doesn't match our fake DB.")
    })
}

export function getAuthedUser(creds){
    return srchUsrNm(users, creds).then(srchPswrd)
}

function checkUserExistence(username){
    for(const id of Object.keys(users)){
        if(username === id) return false;
    }
    return true;
}
export function addUser(user){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(checkUserExistence(user.username)){
                if(!user.stat){
                    users = {
                        ...users,
                        [user.username]: user
                    }
                }else{
                    candidates = {
                        ...candidates,
                        ...user,
                    }
                }
                res(user)
            }
            rej("user existed before.");
        }, 1000);
    })
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

