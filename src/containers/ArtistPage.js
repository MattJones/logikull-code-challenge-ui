import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Divider,
  DialogContainer,
  TextField
} from 'react-md';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart } from 'victory';

import { getArtist, createAlbum, deleteAlbum } from '../store/artist/actions';
import '../assets/stylesheets/ArtistPage.scss';

export class ArtistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      formData: {
        title: '',
        year: '',
        condition: ''
      }
    }
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    const id = match.params.id

    dispatch(getArtist(id));
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
    const { formData } = this.state;
    const { artist, dispatch } = this.props;
    const artistId = artist.id;

    dispatch(createAlbum(formData, artistId))
    this.hideDialog();
  };

  formatCommonWords() {
    const { artist } = this.props;

    if (artist.common_words) {
      return artist.common_words.map((word) => {
        return (
          <li key={word}>{word}</li>
        );
      });
    }
  }

  formatAlbums() {
    const { artist } = this.props;
    if (artist.albums) {
      return artist.albums.map((album) => {
        return (
          <Card key={album.id} className="album-container">
            <CardTitle className="title" title={album.title} />
            <Button
              className="delete-button"
              flat
              onClick={() => {this.deleteAlbum(album.id)}}
              secondary
            >
              Delete
            </Button>
            <CardText>
              <div>Album Year: {album.year}</div>
              <div>Album Condition: {album.condition}</div>
            </CardText>
          </Card>
        );
      });
    }
  }

  deleteAlbum(albumId) {
    const { artist, dispatch } = this.props;
    const artistId = artist.id;
    dispatch(deleteAlbum(albumId, artistId));
  }

  formatBarChart() {
    const { artist } = this.props;
    if (artist.albums) {
      const data = {}
      artist.albums.forEach((album)=> {
        if (data[album.year]) {
          data[album.year] += 1;
        } else {
          data[album.year] = 1;
        }
      });

      const chartData = Object.keys(data).map((key) => {
        return { "year": key, "records": data[key] };
      });

      return (
        <VictoryChart
          domainPadding={{x: 100}}
          className="chart-container"
        >
          <VictoryBar
            data={chartData}
            x="year"
            y="records"
            style={{data: {fill: "#311B92"}}}
          />
        </VictoryChart>
      );
    }
  }

  render() {
    const { artist } = this.props;
    const { visible, formData } = this.state;
    const actions = [
      <Button flat secondary onClick={this.hideDialog}>Cancel</Button>,
      <Button raised primary onClick={this.submit}>Create</Button>
    ];

    return (
      <Card className="page-container">
        <CardText className="artist-header"><h1>{artist.name}</h1></CardText>
        <Divider />
        <div className="artist-info">
          <div className="album-info-header">
            <h2>Albums</h2>
            <Button
              flat
              className="album-button"
              onClick={this.showDialog}
              primary
            >
              New Album
            </Button>
            {this.formatAlbums()}
          </div>
          <div className="artist-stats">
            <h2>Stats</h2>
            <Card className="common-words">
              <CardTitle className="title" title="Common Words" />
                <CardText>
                  {`These words are most commonly used in ${artist.name}'s album titles:`}
                </CardText>
                <ul>{this.formatCommonWords()}</ul>
            </Card>
            <Divider />
            <Card className="range-of-years">
              <CardTitle className="title" title="Album Releases" />
              <CardText>
                {`${artist.name} released albums during the following years: ${artist.range_of_years}`}
              </CardText>
              {this.formatBarChart()}
            </Card>
          </div>
        </div>
        <DialogContainer
          id="newAlbum"
          visible={visible}
          onHide={this.hideDialog}
          actions={actions}
          title="Add New Album"
        >
          <TextField
            className="title-field"
            id="title"
            label="Title"
            name="title"
            onChange={(value, e) => this.handleUpdate(e.target.name, value)}
            value={formData.title}
          />
          <TextField
            className="year-field"
            id="year"
            label="Year"
            name="year"
            onChange={(value, e) => this.handleUpdate(e.target.name, value)}
            value={formData.year}
          />
          <TextField
            className="condition-field"
            id="condition"
            label="Condition"
            name="condition"
            onChange={(value, e) => this.handleUpdate(e.target.name, value)}
            value={formData.condition}
          />
        </DialogContainer>
      </Card>
    );
  }
}

ArtistPage.propTypes = {
  artist: PropTypes.object,
  dispatch: PropTypes.func,
  match: PropTypes.object
};


function mapStateToProps(state) {
  return {
    artist: state.artists.artist
  };
}

export default connect(mapStateToProps)(ArtistPage)
