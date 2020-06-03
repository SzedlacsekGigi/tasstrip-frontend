import React, {Component} from "react";
import axios from "axios";
import {Grid} from "react-mdl";
import Departure from "./Departure";

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
            </div>
        );
    }

}

export default DeparturePage;