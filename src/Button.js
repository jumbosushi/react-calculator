import React, { Component } from 'react';

export default class Button extends Component {
  handleClick() {
    let text = this.props.text,
        callback = this.props.clickHandler

    if (callback)
      callback.call(null, text)
  }

  render() {
    return (
      <button className={this.props.btnClass} onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}
