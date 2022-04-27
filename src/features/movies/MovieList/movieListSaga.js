import { takeEvery, call, put } from 'redux-saga/effects'
import { getMovieList } from '../../getApiData'
import {
    setMovieList,
    fetchMovieList,
    fetchMovieListError,
} from './movieListSlice'

function* fetchMovieListHandler() {
    try {
        const fetchedMovies = yield call(getMovieList)
        yield put(setMovieList(fetchedMovies))
    } catch (error) {
        yield put(fetchMovieListError());
    }
}

export function* watchFetchExample() {
    yield takeEvery(fetchMovieList.type, fetchMovieListHandler)
}
