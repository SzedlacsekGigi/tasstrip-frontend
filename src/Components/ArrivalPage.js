import React, {Component} from "react";
import axios from "axios";
import Arrival from "./Arrival";
import BackButton from "./BackButton";
import {Grid} from "react-mdl";

class ArrivalPage extends Component {

    state = {
        arrivals: []
    }

    async componentDidMount() {
        axios.get(`http://localhost:8080/arrivals`)
            .then(response => {
                this.setState({arrivals: Array.from(response.data)});
            }).catch(error => {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="arrivals-page">
                <Grid>
                    {this.state.arrivals.map((arrival) => (
                        <Arrival arrival={arrival}/>
                    ))}
                </Grid>
                <BackButton/>
            </div>
        );
    }

}

export default ArrivalPage;