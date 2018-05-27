import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from 'react-md';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText'
import Divider from 'react-md/lib/Dividers';

import { getArtists } from '../store/artist/actions';

import '../assets/stylesheets/Home.scss';

export class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getArtists());
  }

  formatArtists(artists) {
    return artists.map((artist) => {
      return (
        <div className="my-albums-container__artists-container" key={artist.id}>
          <Button flat className="artist-container">
              <div className="artist-name">{artist.name}</div>
              <div className="artist-albums">
                <div className="value">{artist.number_of_albums}</div>
                <div className="label">Number of Albums</div>
              </div>
          </Button>
          <Divider />
        </div>
      );
    });
  }

  render() {
    return (
      <Card className="my-albums-container">
        <CardText className="my-albums-container__header">
          <div className="my-albums-container__header-title">All Albums</div>
          <div className="my-albums-container__header-new-album">New Album</div>
        </CardText>
        {this.formatArtists(this.props.artists)}
      </Card>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  artists: PropTypes.array
};

function mapStateToProps(state) {
  return {
    artists: state.artists.list,
  };
}

export default connect(mapStateToProps)(Home)
