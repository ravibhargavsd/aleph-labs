import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';

const routes = (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:movieId" component={Details} />
        </Switch>
    </React.Fragment>
);

export default routes;
