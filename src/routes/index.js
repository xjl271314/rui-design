import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
const Loading = () => null
const IndexPage = Loadable({
  loader: () => import('../pages/IndexPage'),
  loading: Loading,
})

function RouterConfig() {
  return (
    <Router>
      <Route path="/" exact component={IndexPage} />
    </Router>
  )
}
export default RouterConfig;