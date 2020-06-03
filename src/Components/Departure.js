import React, {Component} from "react";
import {Grid} from "react-mdl";

class Departure extends Component {

    render() {
        return (
            <div className="departure">
                <Grid className="base-grid">
                    <Grid className="inner-grid abcdef-box">
                        <p className="ssr">{this.props.departure.ssr}</p>
                        <p className="calls">{this.props.departure.calls}</p>
                        <p className="type">{this.props.departure.type}</p>
                        <p className="wtc">{this.props.departure.wtc}</p>
                        <p className="mach-number">{this.props.departure.machNumber}</p>
                    </Grid>
                    <Grid className="inner-grid departure-g-box">
                        <p className="departure-sid">{this.props.departure.sid}</p>
                    </Grid>
                    <Grid className="inner-grid departure-h-box">
                        <p className="departure-route">{this.props.departure.routeName}</p>
                    </Grid>
                    <Grid className="inner-grid departure-i-box">
                        <p className="departure-time">{this.props.departure.time}</p>
                    </Grid>
                    <Grid className="inner-grid departure-j-box">
                    </Grid>
                    <Grid className="inner-grid departure-k-box">
                    </Grid>
                    <Grid className="inner-grid departure-m-box">
                        <p className="departure-goto">{this.props.departure.goTo}</p>
                        <Grid className="inner-grid departure-l-box">
                            <p className="departure-rfl">{this.props.departure.rfl}</p>
                        </Grid>
                    </Grid>
                    <Grid className="inner-grid departure-n-box">
                        <p>{this.props.departure.routeOfFlight}</p>
                    </Grid>
                    <Grid className="inner-grid departure-op-box">
                        <p className="departure-adep">{this.props.departure.adep}</p>
                        <p className="departure-ades">{this.props.departure.ades}</p>
                    </Grid>
                    <Grid className="inner-grid black-cell"/>
                </Grid>
            </div>
        );
    }

}

export default Departure;