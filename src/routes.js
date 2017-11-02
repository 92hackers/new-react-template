/**
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from 'components/Loading'
import ScrollToTop from 'components/ScrollToTop'

const Home = Loadable({
  loader: () => import('components/Home'),
  loading: Loading,
})

const About = Loadable({
  loader: () => import('components/About'),
  loading: Loading,
})

const TopicList = Loadable({
  loader: () => import('components/TopicList'),
  loading: Loading,
})

const MainRouter = () => (
  <Router>
    <ScrollToTop>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={TopicList} />
        </Switch>
      </div>
    </ScrollToTop>
  </Router>
)

export default MainRouter
