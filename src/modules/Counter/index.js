/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = state => ({
  counter: state.counter,
})

const Counter = connect(mapStateToProps, null)(Component)

export default Counter
