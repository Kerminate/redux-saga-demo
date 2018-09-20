import { all, fork } from 'redux-saga/effects'
import watchHome from './home'

export default function* root () {
  yield all([
    fork(watchHome)
  ])
}
