import React, { Component } from 'react';
import PostIndiv from './PostIndiv'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import './index.css' // do we need this?

class PostList extends Component {
  render() {
      return (
        <PostIndiv />
      )
  }
}

export default PostList;


// let postNodes = this.props.data.map( post => {
//   return (
//     <PostIndiv
//       name= {post.name}
//       uniqueID = {post['_id']}
//       key = {post._id}
//       text = { post.text } />
//   )
// })
// return (
//   <div>
//     {postNodes}
//   </div>
// )
