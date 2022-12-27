import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from '@pages/Accueil/Accueil';
import Challenge from '@pages/Challenge/Challenge';
import Dashboard from '@pages/Dashboard';
import Forgot from '@pages/Forgot/Forgot';
import Login from '@pages/Login';
import Profil from '@pages/Profil';
import Renew from '@pages/Renew/Renew';
import Signup from '@pages/Signup';
import Validation from '@pages/Validation/Validation';
import Message from '@pages/Message';
import Event from '@pages/Event/Event';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/signup" exact={true} component={Signup} />
        <Route path="/dashboard" exact={true} component={Dashboard} />
        <Route path="/home" exact={true} component={Accueil} />
        <Route path="/home/act/invitation" exact={true} component={Challenge} />
        <Route path="/profil/:tabs?" exact={true} component={Profil} />
        <Route path="/forgot" exact={true} component={Forgot} />
        <Route path="/forgot/validation" exact={true} component={Validation} />
        <Route path="/forgot/validation/renew" exact={true} component={Renew} />
        <Route path="/chat" exact={true} component={Message} />
        <Route path="/event" exact={true} component={Event} />
      </Switch>
    </Router>
  );
};
export default Routes;
