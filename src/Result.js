import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <h3 className="result">{this.props.text}</h3>
    )
  }
}


export default Result;
