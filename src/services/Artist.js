import fetch from 'isomorphic-fetch';
import { checkStatus } from '../utils/requests';

class Artist {
  async createArtist(name) {
    const artistsUrl = 'http://localhost:3000/artists';
    const response = await fetch(artistsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
    });

    return await checkStatus(response);
  }

  async deleteArtist(artistId) {
    const artistUrl = `http://localhost:3000/artists/${artistId}`;
    const response = await fetch(artistUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await response;
  }

  async getArtist(id) {
    const artistUrl = `http://localhost:3000/artists/${id}`
    const response = await fetch(artistUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await checkStatus(response);
  }

  async getArtists() {
    const artistsUrl = 'http://localhost:3000/artists';
    const response = await fetch(artistsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await checkStatus(response);
  }

  async createAlbum(albumInfo, artistId) {
    const artistsUrl = `http://localhost:3000/artists/${artistId}/albums`;
    const response = await fetch(artistsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: albumInfo.title,
        year: albumInfo.year,
        condition: albumInfo.condition
      })
    });

    return await checkStatus(response);
  }

  async deleteAlbum(albumId, artistId) {
    const artistsUrl = `http://localhost:3000/artists/${artistId}/albums/${albumId}`;
    const response = await fetch(artistsUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await response;
  }
}

export default new Artist();
