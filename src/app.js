/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { DatePicker } from 'antd'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  cursor: pointer;
  border: 2px solid palevioletred;
`
const Wrapper = styled.div``

const Component = (
  <Wrapper>
      <DatePicker />
      <Button>hello, world. nice to meet you</Button>
  </Wrapper>
)

ReactDOM.render(Component, document.getElementById('root'))
