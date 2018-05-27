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
}

export default new Artist();
