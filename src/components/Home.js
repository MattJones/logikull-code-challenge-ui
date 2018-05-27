import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import Divider from 'react-md/lib/Dividers';

import '../assets/stylesheets/Home.scss';

const Home = props => {
  return (
    <div className="my-albums-container">
      <div clasName="my-albums-container__header">
        <div>All Albums</div>
        <div>New Album</div>
      </div>
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
    </div>
  );
};

export default Home;
