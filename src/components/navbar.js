import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        const login = true;
        return(
            <nav>
                <span>We<span>Vote</span></span>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/threads">Threads</Link></li>
                </ul>
                <div className="right">
                    {!login? (
                        <>
                            <span>Login</span>
                            <span>SignUp</span>
                        </>
                    ):(
                        <>
                            <img src="data:image/png;base64,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" />
                            <span>{"name"}</span>
                            <span>Logout</span>
                        </>
                    )}
                </div>
            </nav>
        )
    }
}

export default Navbar;