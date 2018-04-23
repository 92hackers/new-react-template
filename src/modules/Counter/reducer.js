/**
 * @copyright Breword
 * @author chenyuan
 */

'use strict'

import { INCREMENT, DECREMENT } from './mutations'

const initialState = 0

const counter = (state = initialState, action) => {
  const mapping = {
    [INCREMENT]: state + 1,
    [DECREMENT]: state - 1,
  }

  const matched = mapping[action.type]

  return matched !== undefined ? matched : state
}

export default counter
