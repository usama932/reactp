import { Component } from "react";

class Message extends Component {
    constructor () {
        super();
        this.state = {
            counter : 0
        }
    }
    render(){
        return <h1 > Message:: {this.props.message}</h1>
    }
}

export default Message;