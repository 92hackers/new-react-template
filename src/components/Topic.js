/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

Topic.propTypes = {
  match: PropTypes.object
}

export default Topic
