import Artist from '../../services/Artist';

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
