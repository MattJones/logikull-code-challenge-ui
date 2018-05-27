import Artist from '../../services/Artist';

export const CREATE_ARTIST__FAILURE = 'CREATE_ARTIST__FAILURE';
export const CREATE_ARTIST__REQUEST = 'CREATE_ARTIST__REQUEST';
export const CREATE_ARTIST__SUCCESS = 'CREATE_ARTIST__SUCCESS';
export const DELETE_ARTIST__FAILURE = 'DELETE_ARTIST__FAILURE';
export const DELETE_ARTIST__REQUEST = 'DELETE_ARTIST__REQUEST';
export const DELETE_ARTIST__SUCCESS = 'DELETE_ARTIST__SUCCESS';
export const GET_ARTIST__FAILURE = 'GET_ARTIST__FAILURE';
export const GET_ARTIST__REQUEST = 'GET_ARTIST__REQUEST';
export const GET_ARTIST__SUCCESS = 'GET_ARTIST__SUCCESS';
export const GET_ARTISTS__FAILURE = 'GET_ARTISTS__FAILURE';
export const GET_ARTISTS__REQUEST = 'GET_ARTISTS__REQUEST';
export const GET_ARTISTS__SUCCESS = 'GET_ARTISTS__SUCCESS';
export const CREATE_ALBUM__FAILURE = 'CREATE_ALBUM__FAILURE';
export const CREATE_ALBUM__REQUEST = 'CREATE_ALBUM__REQUEST';
export const CREATE_ALBUM__SUCCESS = 'CREATE_ALBUM__SUCCESS';
export const DELETE_ALBUM__FAILURE = 'DELETE_ALBUM__FAILURE';
export const DELETE_ALBUM__REQUEST = 'DELETE_ALBUM__REQUEST';
export const DELETE_ALBUM__SUCCESS = 'DELETE_ALBUM__SUCCESS';

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

export function deleteArtist(artistId) {
  return async dispatch => {
    dispatch(deleteArtistRequest());
    const response = await Artist.deleteArtist(artistId);

    if (response && response.error) {
      dispatch(deleteArtistFailure());
    } else {
      dispatch(deleteArtistSuccess());
      dispatch(getArtists());
    }
  };
}

export function deleteArtistRequest() {
  return { type: DELETE_ARTIST__REQUEST };
}

export function deleteArtistSuccess() {
  return { type: DELETE_ARTIST__SUCCESS };
}

export function deleteArtistFailure() {
  return { type: DELETE_ARTIST__FAILURE }
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

export function createAlbum(albumInfo, artistId) {
  return async dispatch => {
    dispatch(createAlbumRequest());
    const response = await Artist.createAlbum(albumInfo, artistId);

    if (response && response.error) {
      dispatch(createAlbumFailure());
    } else {
      dispatch(createAlbumSuccess());
      dispatch(getArtist(artistId));
    }
  };
}

export function createAlbumRequest() {
  return { type: CREATE_ALBUM__REQUEST };
}

export function createAlbumSuccess() {
  return { type: CREATE_ALBUM__SUCCESS };
}

export function createAlbumFailure() {
  return { type: CREATE_ALBUM__FAILURE }
}

export function deleteAlbum(albumId, artistId) {
  return async dispatch => {
    dispatch(deleteAlbumRequest());
    const response = await Artist.deleteAlbum(albumId, artistId);

    if (response && response.error) {
      dispatch(deleteAlbumFailure());
    } else {
      dispatch(deleteAlbumSuccess());
      dispatch(getArtist(artistId));
    }
  };
}

export function deleteAlbumRequest() {
  return { type: DELETE_ALBUM__REQUEST };
}

export function deleteAlbumSuccess() {
  return { type: DELETE_ALBUM__SUCCESS };
}

export function deleteAlbumFailure() {
  return { type: DELETE_ALBUM__FAILURE }
}
