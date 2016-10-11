const React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      author: '',
      text: ''
    };
  },
  handleAuthorChange: function (e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function (e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({"author": author, "text": text});
    this.setState({author: '', text: ''});
  },
  render: function () {
    return (
      <form className="comment-form row col-md-4"  onSubmit={this.handleSubmit}>
        <div className="row col-md-12">
          <input className="col-md-12" type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
        </div>
        <div className="row col-md-12">
          <textarea className="col-md-12" rows="4" cols="50" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
        </div>
        {/* <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} /> */}
        <div className="row col-md-3 col-md-offset-9">
          <input className="col-md-12" type="submit" value="Send" />
        </div>
      </form>
    );
  }
});
