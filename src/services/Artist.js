import fetch from 'isomorphic-fetch';
import { checkStatus } from '../utils/requests';

class Artist {
  async getArtists() {
    const artistsUrl = `http://localhost:3000/artists`
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
