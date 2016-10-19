import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Redirect, IndexRoute } from 'react-router'

const Nav = require('./nav.js');
const CommentBoxWrapper = require('./commentBoxWrapper.jsx');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route name="app" path="/" component={Nav}>
      {/* add the routes here */}
      <IndexRoute component={CommentBoxWrapper} />
      {/* <Route name="commentBoxWrapper" path="/comments" component={CommentBoxWrapper} /> */}
    </Route>
  </Router>

  ,document.getElementById('container')
);
{/* <CommentBox url="http://localhost:3000/comments" pollInterval={2000} /> */}
