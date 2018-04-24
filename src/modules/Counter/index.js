/**
 * @copyright Breword
 * @author chenyuan
 */

'use strict'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Component from './component'
import { INCREMENT_ASYNC } from './mutations'

const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => ({
  increse: () => dispatch({ type: INCREMENT_ASYNC })
})

const Counter = connect(mapStateToProps, mapDispatchToProps)(Component)

export default withRouter(Counter)
