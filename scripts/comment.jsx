const React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="comment col-md-12">
        <h2 className="comment-author">{this.props.author}</h2>
        {this.props.children}
      </div>
    );
  }
});
