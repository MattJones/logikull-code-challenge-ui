import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText'
import Divider from 'react-md/lib/Dividers';

import { getArtist } from '../store/artist/actions';

export class ArtistPage extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props;
    const id = match.params.id

    dispatch(getArtist(id));
  }

  render() {
    const { artist } = this.props;

    return (
      <Card>
        <CardText><h1>{artist.name}</h1></CardText>
        <Divider />
        <div></div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    artist: state.artists.artist
  };
}

export default connect(mapStateToProps)(ArtistPage)
