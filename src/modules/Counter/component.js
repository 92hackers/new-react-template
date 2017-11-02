/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Component = ({...props}) => (
  <h1>{props.counter}</h1>
)

Component.propTypes = {
  counter: PropTypes.number,
}

export default Component
