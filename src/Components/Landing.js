import React, {Component} from "react";
import {Redirect} from "react-router-dom";


class Landing extends Component {

    state = {
        redirect: false,
        url: ""
    };

    onClick = (e) => {
        e.preventDefault();
        this.setState({url: '/' + [e.target.value]});
        this.setState({redirect: true});
        console.log("I am clicked" + this.state.url);

    }

    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to={{pathname: this.state.url}}/>
        }
    }

    render() {
        return (
            <div className="landing-page">
                {this.renderRedirect()}
                <button value="howto" onClick={this.onClick}>How it works</button>
                <button value="arrivals" onClick={this.onClick}>Arrivals</button>
                <button value="departures" onClick={this.onClick}>Departures</button>
            </div>
        );
    }


}

export default Landing;