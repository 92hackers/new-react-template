/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import { connect } from 'react-redux'
import Component from './component'
import { INCREMENT_ASYNC } from './mutations'

const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => ({
  increse: () => dispatch({ type: INCREMENT_ASYNC })
})

const Counter = connect(mapStateToProps, mapDispatchToProps)(Component)

export default Counter
