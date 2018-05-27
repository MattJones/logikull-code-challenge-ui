import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, DialogContainer, TextField } from 'react-md';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText'
import Divider from 'react-md/lib/Dividers';

import { createArtist, getArtists } from '../store/artist/actions';

import '../assets/stylesheets/Home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      formData: {
        name: ''
      }
    }
  }

  componentDidMount() {
    this.props.dispatch(getArtists());
  }

  handleUpdate(name, value) {
    const newFormData = Object.assign({}, this.state.formData, {
      [name]: value
    });
    this.setState({ formData: newFormData });
  }

  showDialog = () => {
    this.setState({ visible: true });
  };

  hideDialog = () => {
    this.setState({ visible: false });
  };

  submit = () => {
    const name = this.state.formData.name
    this.props.dispatch(createArtist(name))
    this.hideDialog();
  };

  formatArtists(artists) {
    return artists.map((artist) => {
      return (
        <div className="my-albums-container__artists-container" key={artist.id}>
          <Button
            className="artist-container"
            flat
            onClick={() => this.props.history.push(`/artists/${artist.id}`)}
          >
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
    const { visible, formData } = this.state;
    const actions = [
      <Button flat secondary onClick={this.hideDialog}>Cancel</Button>,
      <Button raised primary onClick={this.submit}>Create</Button>
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
            className="name-field"
            id="name"
            label="Name"
            name="name"
            onChange={(value, e) => this.handleUpdate(e.target.name, value)}
            value={formData.name}
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
