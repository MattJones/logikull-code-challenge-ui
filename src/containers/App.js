import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';

import Header from '../components/Header';
import Home from '../components/Home';
import ArtistPage from '../containers/ArtistPage';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/artists/:id" component={ArtistPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
