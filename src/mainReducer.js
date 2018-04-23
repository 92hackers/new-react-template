/**
 * @copyright Breword
 * @author chenyuan
 */

'use strict'

import { combineReducers } from 'redux'
import counter from 'modules/Counter/reducer'

export default combineReducers({
  counter,
})
