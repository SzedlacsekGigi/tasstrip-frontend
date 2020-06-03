import React, {Component} from "react";
import {Button} from "react-mdl";
import {Link} from "react-router-dom";

class Landing extends Component {

    render() {
        return (
            <div className="landing-page">
                <Button><Link to="/arrivals">Arrivals</Link></Button>
                <Button><Link to="/departures">Departures</Link></Button>
            </div>
        );
    }

}

export default Landing;