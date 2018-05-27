import {
  CREATE_ARTIST__FAILURE,
  CREATE_ARTIST__REQUEST,
  CREATE_ARTIST__SUCCESS,
  DELETE_ARTIST__FAILURE,
  DELETE_ARTIST__REQUEST,
  DELETE_ARTIST__SUCCESS,
  GET_ARTIST__FAILURE,
  GET_ARTIST__REQUEST,
  GET_ARTIST__SUCCESS,
  GET_ARTISTS__FAILURE,
  GET_ARTISTS__REQUEST,
  GET_ARTISTS__SUCCESS,
  CREATE_ALBUM__FAILURE,
  CREATE_ALBUM__REQUEST,
  CREATE_ALBUM__SUCCESS,
  DELETE_ALBUM__FAILURE,
  DELETE_ALBUM__REQUEST,
  DELETE_ALBUM__SUCCESS
} from '../artist/actions'

const initialState = {
  artist: {},
  createAlbumRequest: false,
  createArtistRequest: false,
  delteAlbumRequest: false,
  delteArtistRequest: false,
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
    case DELETE_ARTIST__FAILURE:
      return Object.assign({}, state, {
        deleteArtistRequest: false
      });
    case DELETE_ARTIST__REQUEST:
      return Object.assign({}, state, {
        deleteArtistRequest: true
      });
    case DELETE_ARTIST__SUCCESS:
      return Object.assign({}, state, {
        deleteArtistRequest: false
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
    case CREATE_ALBUM__FAILURE:
      return Object.assign({}, state, {
        createAlbumRequest: false
      });
    case CREATE_ALBUM__REQUEST:
      return Object.assign({}, state, {
        createAlbumRequest: true
      });
    case CREATE_ALBUM__SUCCESS:
      return Object.assign({}, state, {
        createAlbumRequest: false
      });
    case DELETE_ALBUM__FAILURE:
      return Object.assign({}, state, {
        deleteAlbumRequest: false
      });
    case DELETE_ALBUM__REQUEST:
      return Object.assign({}, state, {
        deleteAlbumRequest: true
      });
    case DELETE_ALBUM__SUCCESS:
      return Object.assign({}, state, {
        deleteAlbumRequest: false
      });
    default:
      return state;
  }
}

export default artists;
