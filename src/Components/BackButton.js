import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class BackButton extends Component{
    state = {
        redirect: false
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({redirect: true});
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/"/>
        }
    }


    render() {
        return (
            <div className="back-button">
                {this.renderRedirect()}
                <button className="arrivals-button" onClick={this.onClick}>Back</button>
            </div>
        );
    }

}

export default BackButton;