import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText'
import Divider from 'react-md/lib/Dividers';

import '../assets/stylesheets/Home.scss';

const Home = props => {
  return (
    <Card className="my-albums-container">
      <CardText clasName="my-albums-container__header">
        <div className="header-title">All Albums</div>
        <div>New Album</div>
      </CardText>
      <Divider />
      <Card>
        <div>
          <div className="my-albums-container__artist-name">Artist1</div>
          <ul>
            <li>Number of Albums</li>
            <li>Record Year Range</li>
            <li>Common Words Across Record Titles</li>
          </ul>
          <Divider />
        </div>
      </Card>
    </Card>
  );
};

export default Home;
