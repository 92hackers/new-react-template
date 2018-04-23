/**
 * @copyright Breword
 * @author chenyuan
 */

'use strict'

import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_ASYNC } from './mutations'

// worker saga
export function * increment() {
  yield delay(3000)
  yield put({ type: INCREMENT })
}

// watcher saga
export function * watchIncrement() {
  yield takeEvery(INCREMENT_ASYNC, increment)
}
