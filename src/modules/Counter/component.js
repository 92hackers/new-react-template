/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  cursor: pointer;
  border: 2px solid palevioletred;
`

const Component = ({...props}) => (
  <section>
    <Button onClick={() => props.increse() }>Increment One</Button>
    <hr/>
    <h1>{props.counter}</h1>
  </section>
)

Component.propTypes = {
  counter: PropTypes.number,
  increse: PropTypes.func,
}

export default Component
