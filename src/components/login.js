import React from "react";

class Login extends React.Component{
    render(){
        return(
            <div className="signup">
                <form className="signup">
                    <header></header>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <div id="logo">
                    <h1>We Know</h1>
                    <h1>We<span>Vote</span></h1>
                </div>
            </div>
        )
    }
}

export default Login;