import React, { Component } from 'react'
// import $ from 'jquery-ajax'
import {Grid, Row, Col} from 'react-bootstrap'

class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <div>
        <Row className="user-posts">
          <p> user posts listing </p>
        </Row>
      </div>
    )
  }
}

export default UserPosts;
