import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import { InputBase } from '@material-ui/core';


class Departure extends Component {

    render() {
        return (
            <div className="departure">
                <Grid className="base-grid">
                    <Cell className="inner-grid abcdef-box">
                        <p className="ssr">{this.props.departure.ssr}</p>
                        <p className="calls">{this.props.departure.calls}</p>
                        <p className="type">{this.props.departure.type}</p>
                        <p className="wtc">{this.props.departure.wtc}</p>
                        <p className="mach-number">{this.props.departure.machNumber}</p>
                    </Cell>
                    <Cell className="inner-grid departure-g-box">
                        <p className="departure-sid">{this.props.departure.sid}</p>
                    </Cell>
                    <Cell className="inner-grid departure-h-box">
                        <p className="departure-route">{this.props.departure.routeName}</p>
                    </Cell>
                    <Cell className="inner-grid departure-i-box">
                        <p className="departure-time">{this.props.departure.time}</p>
                    </Cell>
                    <Cell className="inner-grid departure-j-box">
                        <InputBase fullWidth={true}/>
                    </Cell>
                    <Cell className="inner-grid departure-k-box"/>
                    <Cell className="inner-grid departure-m-box">
                        <p className="departure-goto">{this.props.departure.goTo}</p>
                        <Cell className="inner-grid departure-l-box">
                            <p className="departure-rfl">{this.props.departure.rfl}</p>
                        </Cell>
                    </Cell>
                    <Cell className="inner-grid departure-n-box">
                        <p>{this.props.departure.routeOfFlight}</p>
                    </Cell>
                    <Cell className="inner-grid departure-op-box">
                        <p className="departure-adep">{this.props.departure.adep}</p>
                        <p className="departure-ades">{this.props.departure.ades}</p>
                    </Cell>
                    <Cell className="inner-grid black-cell"/>
                </Grid>
            </div>
        );
    }

}

export default Departure;