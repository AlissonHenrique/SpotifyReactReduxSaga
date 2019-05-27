import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlaylistActions } from '../ducks/playlists';

export function* getPlaylist() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlaylistActions.getPlayListsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
