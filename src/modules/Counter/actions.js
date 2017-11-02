/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

// import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import { INCREMENT } from './mutations'

// worker saga
export function * increment() {
  // yield delay(1000)
  yield put({ type: INCREMENT })
}

// watcher saga
export function * watchIncrement() {
  yield takeEvery('INCREMENT_ASYNC', increment)
}
