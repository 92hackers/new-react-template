/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import Topic from './Topic'

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          props vs State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

Topics.propTypes = {
  match: PropTypes.object
}

export default Topics
