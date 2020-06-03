import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";

class Arrival extends Component {

    render() {
        return (
            <div className="arrival">
                <Grid className="base-grid">
                    <Cell className="inner-grid abcdef-box">
                        <p>{this.props.arrival.ssr}</p>
                        <p className="calls">{this.props.arrival.calls}</p>
                        <p className="type">{this.props.arrival.type}</p>
                        <p className="wtc">{this.props.arrival.wtc}</p>
                        <p className="mach-number">{this.props.arrival.machNumber}</p>
                    </Cell>
                    <Cell className="inner-grid arrival-g-box">
                        <p className="arrival-route-first">{this.props.arrival.route[0]}</p>
                        <p className="arrival-route-second">{this.props.arrival.route[1]}</p>
                        <p className="arrival-route-third">{this.props.arrival.route[2]}</p>
                    </Cell>
                    <Cell className="inner-grid arrival-hij-box">
                        <p>{this.props.arrival.adep}</p>
                        <p className="arrival-ades">{this.props.arrival.ades}</p>
                        <p className="arrival-eta"></p>
                    </Cell>
                    <Cell className="inner-grid arrival-k-box">
                        <i className="material-icons">arrow_downward</i>
                        <p className="arrival-altitude">{this.props.arrival.levelsOrAltitude}</p>
                    </Cell>
                    <Cell className="inner-grid arrival-small-box arrival-l-box"/>
                    <Cell className="inner-grid arrival-small-box arrival-m-box"/>
                    <Cell className="inner-grid arrival-small-box arrival-n-box"/>
                    <Cell className="inner-grid arrival-small-box arrival-o-box"/>
                    <Cell className="inner-grid arrival-small-box arrival-p-box"/>
                    <Cell className="inner-grid arrival-small-box arrival-q-box"/>
                    <Cell className="inner-grid arrival-small-box arrival-r-box"/>
                    <Cell className="inner-grid arrival-small-box arrival-s-box"/>
                    <Cell className="inner-grid arrival-t-box"/>
                </Grid>
            </div>
        );
    }


}

export default Arrival;