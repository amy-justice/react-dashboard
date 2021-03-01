import React from 'react';
import Home from './Home'
import PocketsPage from './PocketsPage';
import Budget from './Budget'
import Sidebar from './Sidebar';
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <div class="container flex flex-row grid-cols-2 auto-cols-min">
        <div class="flex flex-col sm:flex-row sm:justify-around h-screen sm:w-1/5 lg:w-64">
            <Sidebar />
        </div>
        <div class="flex flex-col w-screen">
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Pockets" component={PocketsPage} />
                <Route exact path="/Budget" component={Budget} />
            </Switch>
        </div>
    </div>
  );
};

export default Routes