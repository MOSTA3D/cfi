import React from "react";
import { connect } from "react-redux";
import MinThread from "./minThread";

class Threads extends React.Component{
    render(){
        const {threads} = this.props;
        return(
            <ul className="thread-list">
                {
                    Object.values(threads).map(thd=><MinThread key={thd.id} thd={thd} />)
                }
            </ul>
        )
    }
}

function mapStateToProps({threads}){
    return {
        threads
    }
}

export default connect(mapStateToProps)(Threads);