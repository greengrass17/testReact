window.CommentBox = window.CommentBox || {}

window.CommentBox.CommentList = React.createClass({
  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <CommentBox.Comment author={comment.author} key={comment.id}>{comment.text}</CommentBox.Comment>
      );
    })
    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
});
