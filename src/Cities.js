import React, { Component } from 'react';
import Citylist from './Citylist'

// this is when Route path='/cities' (index.js)
class Cities extends Component {
  render() {
    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNvYs2__3w_AWwR7XhqjS_wcg7dnVdQwY9YfKo9MoGkYfT3upexWjiqrJ" alt="suitcase"/>
        <Citylist />
      </div>
    );
  }
}

export default Cities;