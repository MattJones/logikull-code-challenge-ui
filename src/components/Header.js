import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'react-md/lib/Toolbars';
import { withRouter } from 'react-router';

import '../assets/stylesheets/Header.scss';

export class Header extends Component {
  render() {
    // In React Router v4, `withRouter` makes `history` available as
    // a prop in the wrapped component. One way to programatically
    // redirect is to push a route to this history object. Additional ways:
    //  1. Accessing context: this.context.router.history.push(route);
    //  2. Use `push` from 'react-router-redux', i.e. dispatch(push(route));
    return (
      <div className="header">
        <Toolbar
          themed
          title="My Album Manager"
        />
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object,
};

// 'withRouter' makes router state available to the wrapped component.
// See: https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(Header);
