import Artist from '../../services/Artist';

export const CREATE_ARTIST__FAILURE = 'CREATE_ARTIST__FAILURE';
export const CREATE_ARTIST__REQUEST = 'CREATE_ARTIST__REQUEST';
export const CREATE_ARTIST__SUCCESS = 'CREATE_ARTIST__SUCCESS';
export const GET_ARTISTS__FAILURE = 'GET_ARTISTS__FAILURE';
export const GET_ARTISTS__REQUEST = 'GET_ARTISTS__REQUEST';
export const GET_ARTISTS__SUCCESS = 'GET_ARTISTS__SUCCESS';

export function getArtists() {
  return async dispatch => {
    dispatch(getArtistsRequest());
    const response = await Artist.getArtists();

    if (response && response.error) {
      dispatch(getArtistsFailure());
    } else {
      dispatch(getArtistsSuccess(response));
    }
  };
}

export function getArtistsFailure() {
  return { type: GET_ARTISTS__FAILURE };
}

export function getArtistsRequest() {
  return { type: GET_ARTISTS__REQUEST };
}

export function getArtistsSuccess(artists) {
  return { type: GET_ARTISTS__SUCCESS, artists };
}

export function createArtist(name) {
  debugger
  return async dispatch => {
    dispatch(createArtistRequest());
    const response = await Artist.createArtist(name);

    if (response && response.error) {
      dispatch(createArtistFailure());
    } else {
      dispatch(createArtistSuccess());
      dispatch(getArtists());
    }
  };
}

export function createArtistRequest() {
  return { type: CREATE_ARTIST__REQUEST };
}

export function createArtistSuccess() {
  return { type: CREATE_ARTIST__SUCCESS };
}

export function createArtistFailure() {
  return { type: CREATE_ARTIST__FAILURE }
}
