import React from 'react';
import {Switch, Route, Router} from "react-router-dom";
import {StylesProvider} from "@material-ui/core/styles";
import Landing from "./Landing";
import Pricing from "./Pricing";

export default ({history}) => {
    return (
        <div>
            <StylesProvider>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/pricing' component={Pricing} />
                        <Route path='/' component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
