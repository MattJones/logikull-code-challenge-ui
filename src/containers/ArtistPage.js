import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card, CardText, CardTitle, Divider } from 'react-md';
import { connect } from 'react-redux';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory';

import { getArtist } from '../store/artist/actions';
import '../assets/stylesheets/ArtistPage.scss';

export class ArtistPage extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props;
    const id = match.params.id

    dispatch(getArtist(id));
  }

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
            <CardText>
              <div>Album Year: {album.year}</div>
              <div>Album Condition: {album.condition}</div>
            </CardText>
          </Card>
        );
      });
    }
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
            style={{data: {fill: "#6A1B9A"}}}
          />
        </VictoryChart>
      );
    }
  }

  render() {
    const { artist } = this.props;

    return (
      <Card>
        <CardText className="artist-header"><h1>{artist.name}</h1></CardText>
        <Divider />
        <div className="artist-info">
          <div>
            <h2>Albums</h2>
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
