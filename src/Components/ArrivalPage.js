import React, {Component} from "react";
import axios from "axios";
import Arrival from "./Arrival";

class ArrivalPage extends Component{

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
                {this.state.arrivals.map((arrival) => (
                    <Arrival arrival={arrival}/>
                ))}
            </div>
        );
    }

}

export default ArrivalPage;