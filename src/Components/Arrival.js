import React, {Component} from "react";
import {Grid} from "react-mdl";

class Arrival extends Component {

    render() {
        return (
            <div className="arrival">
                <Grid className="base-grid">
                    <Grid className="inner-grid abcdef-box">
                        <p>{this.props.arrival.ssr}</p>
                        <p className="calls">{this.props.arrival.calls}</p>
                        <p className="type">{this.props.arrival.type}</p>
                        <p className="wtc">{this.props.arrival.wtc}</p>
                        <p className="mach-number">{this.props.arrival.machNumber}</p>
                    </Grid>
                    <Grid className="inner-grid arrival-g-box">
                        <p className="arrival-route-first">{this.props.arrival.route[0]}</p>
                        <p className="arrival-route-second">{this.props.arrival.route[1]}</p>
                        <p className="arrival-route-third">{this.props.arrival.route[2]}</p>
                    </Grid>
                    <Grid className="inner-grid arrival-hij-box">
                        <p>{this.props.arrival.adep}</p>
                        <p className="arrival-ades">{this.props.arrival.ades}</p>
                        <p className="arrival-eta"></p>
                    </Grid>
                    <Grid className="inner-grid arrival-k-box">
                        <i className="material-icons">arrow_downward</i>
                        <p className="arrival-altitude">{this.props.arrival.levelsOrAltitude}</p>
                    </Grid>
                    <Grid className="inner-grid arrival-small-box arrival-l-box">
                    </Grid>
                    <Grid className="inner-grid arrival-small-box arrival-m-box">
                    </Grid>
                    <Grid className="inner-grid arrival-small-box arrival-n-box">
                    </Grid>
                    <Grid className="inner-grid arrival-small-box arrival-o-box">
                    </Grid>
                    <Grid className="inner-grid arrival-small-box arrival-p-box">
                    </Grid>
                    <Grid className="inner-grid arrival-small-box arrival-q-box">
                    </Grid>
                    <Grid className="inner-grid arrival-small-box arrival-r-box">
                    </Grid>
                    <Grid className="inner-grid arrival-small-box arrival-s-box">
                    </Grid>
                    <Grid className="inner-grid arrival-t-box">
                    </Grid>
                </Grid>
            </div>
        );
    }


}

export default Arrival;