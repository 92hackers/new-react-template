/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class ScrollToTop extends Component {

  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
