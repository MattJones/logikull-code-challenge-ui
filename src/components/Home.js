import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, DialogContainer, TextField } from 'react-md';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText'
import Divider from 'react-md/lib/Dividers';

import { getArtists } from '../store/artist/actions';

import '../assets/stylesheets/Home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getArtists());
  }

  showDialog = () => {
    this.setState({ visible: true });
  };

  hideDialog = () => {
    this.setState({ visible: false });
  };

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
    const { visible } = this.state;
    const actions = [
      { secondary: true, children: 'Cancel', onClick: this.hideDialog },
      <Button raised primary onClick={this.hideDialog}>Create</Button>
    ];

    return (
      <Card className="my-albums-container">
        <CardText className="my-albums-container__header">
          <div className="my-albums-container__header-title">Artists</div>
          <div className="my-albums-container__header-new">
            <Button
              flat
              className="album-button"
              onClick={this.showDialog}
            >
              New Artist
            </Button>
          </div>
        </CardText>
        {this.formatArtists(this.props.artists)}
        <DialogContainer
          id="newArtist"
          visible={visible}
          onHide={this.hideDialog}
          actions={actions}
          title="Add New Artist"
        >
          <TextField
            id="simple-action-dialog-field"
            label="Artst Name"
            placeholder="Name"
          />
        </DialogContainer>
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
