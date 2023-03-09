//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import styled from "styled-components";

import Header from "./Header";
import LambdaHeader from "./LambdaHeader";
import View from "./View";
import Login from "./Login";
import Logout from "./Logout";
import Create from "./Create";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <RouteContainer>
        <Switch>
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path="/view" component={View} />
          <PrivateRoute path="/create" component={Create} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </RouteContainer>
      {/* <LambdaHeader /> */}
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  height: 100%;
`;
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`;