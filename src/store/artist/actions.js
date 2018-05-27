import Artist from '../../services/Artist';

export const CREATE_ARTIST__FAILURE = 'CREATE_ARTIST__FAILURE';
export const CREATE_ARTIST__REQUEST = 'CREATE_ARTIST__REQUEST';
export const CREATE_ARTIST__SUCCESS = 'CREATE_ARTIST__SUCCESS';
export const GET_ARTIST__FAILURE = 'GET_ARTIST__FAILURE';
export const GET_ARTIST__REQUEST = 'GET_ARTIST__REQUEST';
export const GET_ARTIST__SUCCESS = 'GET_ARTIST__SUCCESS';
export const GET_ARTISTS__FAILURE = 'GET_ARTISTS__FAILURE';
export const GET_ARTISTS__REQUEST = 'GET_ARTISTS__REQUEST';
export const GET_ARTISTS__SUCCESS = 'GET_ARTISTS__SUCCESS';

export function createArtist(name) {
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

export function getArtist(id) {
  return async dispatch => {
    dispatch(getArtistsRequest());
    const response = await Artist.getArtist(id);

    if (response && response.error) {
      dispatch(getArtistFailure());
    } else {
      dispatch(getArtistSuccess(response));
    }
  };
}

export function getArtistFailure() {
  return { type: GET_ARTIST__FAILURE };
}

export function getArtistRequest() {
  return { type: GET_ARTIST__REQUEST };
}

export function getArtistSuccess(artist) {
  return { type: GET_ARTIST__SUCCESS, artist };
}

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
