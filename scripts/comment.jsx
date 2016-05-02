window.CommentBox = window.CommentBox || {}

window.CommentBox.Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <h2 className="comment-author">{this.props.author}</h2>
        {this.props.children}
      </div>
    );
  }
});

