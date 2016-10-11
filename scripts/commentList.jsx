const React = require('react');
const Comment = require('./comment.jsx');

module.exports = React.createClass({
  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
      );
    })
    return (
      <div className="comment-list row col-md-4">
        {commentNodes}
      </div>
    );
  }
});
