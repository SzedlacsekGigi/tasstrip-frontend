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
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{pathname: this.state.url}}/>
        }
    }

    render() {
        return (
            <div className="landing-page">
                <div className="buttons">
                    {this.renderRedirect()}
                    <button value="howto" className="howto-button" onClick={this.onClick}>How it works</button>
                    <button value="arrivals" className="arrivals-button" onClick={this.onClick}>Arrivals</button>
                    <button value="departures" className="departures-button" onClick={this.onClick}>Departures</button>
                </div>
            </div>
        );
    }


}

export default Landing;