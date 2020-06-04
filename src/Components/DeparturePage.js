import React, {Component} from "react";
import axios from "axios";
import {Grid} from "react-mdl";
import Departure from "./Departure";
import BackButton from "./BackButton";

class DeparturePage extends Component{

    state = {
        departures: []
    };

    async componentDidMount(){
        axios.get(`http://localhost:8080/departures`)
            .then(response => {
                this.setState({departures: Array.from(response.data)});
                }).catch(error => {
                    console.log(error);
        });
    };

    render() {
        return (
            <div className="departures-page">
                <Grid>
                    {this.state.departures.map((departure) => (
                        <Departure departure={departure}/>
                    ))}
                </Grid>
                <BackButton/>
            </div>
        );
    }

}

export default DeparturePage;