
import axios from 'axios'
import { put, take, call, fork, cancel, cancelled, all, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { GET_PERSON_DATA, CANCEL_PERSON_REQUEST } from '../actionTypes'
import { getPersonDataAction, toggleLoading, getRequestResult } from '../actionCreators/home'

function* getPersonData (action) {
  try {
    yield put(toggleLoading(true))
    const userName = action.payload.name
    // 设置请求的超时时间
    const timeout = action.payload.timeout || 5000
    const url = `https://api.github.com/users/${userName}`
    const api = () => axios.get(url)
    axios.defaults.timeout = timeout
    yield delay(2000)
    const result = yield call(api)
    if (result) {
      yield put(getPersonDataAction(result.data))
      yield put(getRequestResult(1))
    }
  } catch (e) {
    yield put(getRequestResult(3))
    console.log(e)
  } finally {
    if (yield cancelled()) {
      yield put(getRequestResult(2))
    }
    yield put(toggleLoading(false))
  }
}

function* watchPersonData () {
  while (true) {
    const task = yield fork(takeLatest, GET_PERSON_DATA, getPersonData)
    yield take(CANCEL_PERSON_REQUEST)
    yield cancel(task)
  }
}

function* watchHome () {
  yield all([
    yield fork(watchPersonData)
  ])
}

export default watchHome
