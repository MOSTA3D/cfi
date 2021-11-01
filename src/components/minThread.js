import React from "react";
import {connect} from "react-redux";
class MinThread extends React.Component{
    render(){
        const {thd, candidate} = this.props;
        return(
            <li id="minThread">
                <header>
                    For: {candidate.name} <span><img src={candidate.avatarURL} /></span>
                </header>
                <div>
                    <h2>{thd.text}</h2>
                    <span>By: {thd.author} </span>
                </div>
                <div>
                    <span id="with"></span> &nbsp;
                    <label for="with">{thd.with.length}</label>
                    <span style={{display:"inline-block", position:"relative",width:"40px", height:"20px"}}><span id="without"></span></span>
                    <label for="without">{thd.without.length}</label>
                    <span id="n-comments">{thd.comments.length}</span>
                </div>
            </li>
        )
    }
}

function mapStateToProps({candidates}, {thd}){
    const some = "batman";
    const {name, avatarURL} = candidates[thd.for]
    const candidate = {name, avatarURL};
    return{
        candidate
    }
}
export default connect(mapStateToProps)(MinThread);