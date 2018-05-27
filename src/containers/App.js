import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';

import Header from '../components/Header';
import Home from '../components/Home';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default withRouter(App);
