import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from 'globals/containers/navbar';
import Login from 'login/login';
import App from 'main/app';

const routes = (
  <div id="page-content-wrapper" className="full-page">
    <Navbar />
    <div className="container-fluid full-page">
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
    </div>
  </div>
);

export default routes;

