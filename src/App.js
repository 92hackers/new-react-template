/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import styled from 'styled-components'
import Counter from 'modules/Counter'
import Router from './routes'
import reducer from './mainReducer'
import mainSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// eslint-disable-next-line no-undef
const composeEnhancers = ENV === 'production' ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// Initilize store.
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))  
)

// run sagas
sagaMiddleware.run(mainSaga)

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

const increment = () => store.dispatch({ type: 'INCREMENT_ASYNC' })

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <Router />
      <Button onClick={increment}>Increment One</Button>
      <Counter />
    </Wrapper>
  </Provider>
)

render(<App />, document.getElementById('root'))
