import React from 'react';
import { Route } from 'react-router-dom';
import App from 'main/app';

const routes = (
  <div id="page-content-wrapper" className="full-page">
    <div className="container-fluid full-page">
      <Route exact path="/" component={App} />
    </div>
  </div>
);

export default routes;

