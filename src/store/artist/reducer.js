import {
  CREATE_ARTIST__FAILURE,
  CREATE_ARTIST__REQUEST,
  CREATE_ARTIST__SUCCESS,
  GET_ARTIST__FAILURE,
  GET_ARTIST__REQUEST,
  GET_ARTIST__SUCCESS,
  GET_ARTISTS__FAILURE,
  GET_ARTISTS__REQUEST,
  GET_ARTISTS__SUCCESS
} from '../artist/actions'

const initialState = {
  artist: {},
  createArtistRequest: false,
  getArtistRequest: false,
  getArtistsRequest: false,
  list: [],
};

function artists(state = initialState, action) {
  switch (action.type) {
    case CREATE_ARTIST__FAILURE:
      return Object.assign({}, state, {
        createArtistRequest: false
      });
    case CREATE_ARTIST__REQUEST:
      return Object.assign({}, state, {
        createArtistRequest: true
      });
    case CREATE_ARTIST__SUCCESS:
      return Object.assign({}, state, {
        createArtistRequest: false
      });
    case GET_ARTIST__FAILURE:
      return Object.assign({}, state, {
        list: [],
        getArtistRequest: false
      });
    case GET_ARTIST__REQUEST:
      return Object.assign({}, state, {
        list: [],
        getArtistRequest: true
      });
    case GET_ARTIST__SUCCESS:
      return Object.assign({}, state, {
        artist: action.artist,
        getArtistRequest: false
      });
    case GET_ARTISTS__FAILURE:
      return Object.assign({}, state, {
        list: [],
        getArtistsRequest: false
      });
    case GET_ARTISTS__REQUEST:
      return Object.assign({}, state, {
        list: [],
        getArtistsRequest: true
      });
    case GET_ARTISTS__SUCCESS:
      return Object.assign({}, state, {
        list: action.artists,
        getArtistsRequest: false
      });
    default:
      return state;
  }
}

export default artists;
