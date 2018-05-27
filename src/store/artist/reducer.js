import {
  GET_ARTISTS__FAILURE,
  GET_ARTISTS__REQUEST,
  GET_ARTISTS__SUCCESS
} from '../artist/actions'

const initialState = {
  list: [],
  getArtistsRequest: false
};

function artists(state = initialState, action) {
  switch (action.type) {
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
