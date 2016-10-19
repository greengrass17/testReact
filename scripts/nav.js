import React from 'react'
import { Link } from 'react-router'
// ...
module.exports = React.createClass({
  render: function() {
    return (
      <div className="main row">
        {/* <h2>CommentBox</h2> */}

        {/* add some links */}
        <div>
          <h2>CommentBox</h2>
          
          <ul className="col-md-2">
          <li><Link to="/">CommentBox</Link></li>
          </ul>
        </div>

        <div className="col-md-10">
          {this.props.children}
        </div>
      </div>
    )
  }
})
