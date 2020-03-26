import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
const Loading = () => null
const IndexPage = Loadable({
  loader: () => import('../pages/IndexPage'),
  loading: Loading,
})

const TestPage = Loadable({
  loader: () => import('../pages/plogan'),
  loading: Loading,
})


function RouterConfig() {
  return (
    <Router>
      <Route path="/" exact component={IndexPage} />
      <Route path="/test" exact component={TestPage} />
    </Router>
  )
}
export default RouterConfig;