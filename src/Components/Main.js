import React from "react";
import {Route, Switch} from 'react-router-dom';
import Landing from "./Landing";
import ArrivalPage from "./ArrivalPage";
import DeparturePage from "./DeparturePage";


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/arrivals" component={ArrivalPage}/>
        <Route path="/departures" component={DeparturePage}/>
    </Switch>
);

export default Main;