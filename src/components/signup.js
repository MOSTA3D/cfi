import React from "react";
import { connect } from "react-redux";
import { handleSignUp, removeError } from "../actions/users";

class Signup extends React.Component{
    thumbnails = [
        "https://i.pinimg.com/originals/59/29/35/592935ce669457e0915dff8c040381e9.jpg",
        "https://png.pngitem.com/pimgs/s/78-785878_batman-icon-batman-avatar-icon-hd-png-download.png",
        "https://toppng.com/uploads/preview/levi-ackerman-attack-on-titan-levi-11562884370wmffa5lthu.png",
        "https://assets.dicebreaker.com/marvel-multiverse-role-playing-game-artwork.png/BROK/thumbnail/1200x900/quality/100/marvel-multiverse-role-playing-game-artwork.png",
        "http://thedragonvault.com/product_images/d/779/square-enix-dc-comics-variant-play-arts-kai-designed-by-tetsuya-nomura-batman_%281%29__26031_zoom.jpg",
        "https://www.seekpng.com/png/small/11-111573_batman-arkham-knight-png-transparent-picture-batman-arkham.png"
    ]

    state = {
        username: "",
        password: "",
        confirm: "",
        avatar: "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=",
        selected: null,
        err:null,
        matchError: false
    }

    showError = ()=>{

    };
    asyncDispatch = ()=>{
        const { username, password, avatar} = this.state;
        const user = {username, password, avatar};
        this.props.dispatch(handleSignUp(user));
        return new Promise(res=>{
            res();
        })
    };

    handleSubmit = e=>{
        e.preventDefault();
        const { password, confirm } = this.state;
        if(password === confirm){
            this.asyncDispatch().then(()=>{
                if(this.props.errors){
                    console.log("errors existed.")
                    console.log(this.props.errors);/*this.setState({err: this.props.errors})*/
                    this.props.dispatch(removeError());
                }
            })
        }else{
            this.showError();
        }
    }
    changeUserName = e=>{
        this.setState({username: e.target.value})
    }
    changePassword = e=>{
        this.setState({password: e.target.value})
    }
    changeConfirm = e=>{
        this.setState({confirm: e.target.value})
    }
    setAvatar = e=>{
        if(e.target.dataset.img){
            const avatar = e.target.dataset.img;
            e.target.classList.add("active");
            this.state.selected&&this.state.selected.classList.remove("active");
            this.setState({selected: e.target})
            this.setState({avatar});
            console.log("ok")
        }
    }
    // handleError(err){
    //     if(this.state.err){
    //         alert(err);
    //         this.props.dispatch(removeError());
    //         this.setState({err: null});
    //     }    
    // }
    render(){
        return(
            <div className="signup">
                {/* {this.handleError(this.state.err)} */}
                {/* {this.setState({err: null})} */}
                <form className="signup">
                    <input type="text" value={this.state.username} onChange={this.changeUserName} name="username" placeholder="Username" />
                    <input type="password" value={this.state.password} onChange={this.changePassword} name="password" placeholder="Password" />
                    <input className={this.state.confirm !== this.state.password &&"merr"} id="confirm" type="password" value={this.state.confirm} onChange={this.changeConfirm} name="confirmp" placeholder="Confirm Password" />
                    <button type="submit" onClick={this.handleSubmit} value="Signup">SignUp</button>
                    <div className="avatars" onClick={this.setAvatar} >
                        {this.thumbnails.map((tn, i)=><div key={i} className="imgctr"><img src={tn} /><div data-img={tn}></div></div>)}
                    </div>
                </form>
                <div id="logo">
                    <h1>We Know</h1>
                    <h1>We<span>Vote</span></h1>
                </div>
            </div>
        )
    }
}
function mapStateToProps({errors}){
    return {
        errors
    }
}
export default connect(mapStateToProps)(Signup);