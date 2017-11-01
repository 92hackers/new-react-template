/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Router from './routes'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  cursor: pointer;
  border: 2px solid palevioletred;
`

const Wrapper = styled.div`
  padding: 10px;
`

const App = () => (
  <Wrapper>
    <Router />
    <Button>Nice to met you</Button>
  </Wrapper>
)

ReactDOM.render(<App />, document.getElementById('root'))
