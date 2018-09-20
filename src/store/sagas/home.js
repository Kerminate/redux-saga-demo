
import axios from 'axios'
import { put, call, cancelled, all, takeLatest } from 'redux-saga/effects'
import { GET_PERSON_DATA } from '../actionTypes'
import { getPersonDataAction, getDataErrorAction, toggleLoading } from '../actionCreators/home'

function* getPersonData (action) {
  try {
    yield put(toggleLoading(true))
    const userName = action.payload
    const url = `https://api.github.com/users/${userName}`
    const params = { cancelType: 'CANCEL_REQUEST', timeOut: 5000 }
    const api = () => axios.get(url, params)
    const result = yield call(api)
    if (result) {
      console.log(result.data)
      yield put(getPersonDataAction(result.data))
    }
  } catch (e) {
    yield put(getDataErrorAction(e))
  } finally {
    const isCanceled = yield cancelled()
    console.log(isCanceled)
    yield put(toggleLoading(false))
  }
}

function* watchHome () {
  yield all([
    yield takeLatest(GET_PERSON_DATA, getPersonData)
  ])
}

export default watchHome
