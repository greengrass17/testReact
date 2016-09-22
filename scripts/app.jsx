const React = require('react');
const ReactDOM = require('react-dom');

const CommentBox = require('./commentBox.jsx');
ReactDOM.render(
  <CommentBox url="http://localhost:3000/comments" pollInterval={2000} />,
  document.getElementById('container')
);
