import React from 'react';
import Home from './Home'
import PocketsPage from './PocketsPage';
import Budget from './Budget'
import Sidebar from './Sidebar';
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <div class="container grid-cols-2 auto-cols-min">
      <Sidebar />
        <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>
            <Route exact path="/Pockets" component={PocketsPage} />
            <Route exact path="/Budget" component={Budget} />
        </Switch>
    </div>
  );
};

export default Routes