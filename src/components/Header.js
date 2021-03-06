import React from 'react';
import { Button } from 'react-md';

import '../assets/stylesheets/Header.scss';

const Header = (props) => {
  return (
    <div className="header-container">
      <Button
        className="header-home-button"
        icon
        onClick={() => props.history.push('/')}
        secondary
      >
        home
      </Button>
      <div className="header">My Album Manager</div>
    </div>
  );
}

export default Header;
