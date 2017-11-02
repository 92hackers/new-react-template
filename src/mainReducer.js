/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import { combineReducers } from 'redux'
import counter from 'modules/Counter/reducer'

export default combineReducers({
  counter,
})
