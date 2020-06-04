import React from "react";
import {Route, Switch} from 'react-router-dom';
import Landing from "./Landing";
import ArrivalPage from "./ArrivalPage";
import DeparturePage from "./DeparturePage";
import Howto from "./Howto";


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/arrivals" component={ArrivalPage}/>
        <Route path="/departures" component={DeparturePage}/>
        <Route path="/howto" component={Howto}/>
    </Switch>
);

export default Main;