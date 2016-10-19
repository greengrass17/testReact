const React = require('react');
const CommentBox = require('./commentBox.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <CommentBox url="http://localhost:3000/comments" pollInterval={2000} />
    )
  }
})
