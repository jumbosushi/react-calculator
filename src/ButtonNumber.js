import React, { Component, PropTypes } from 'react';

export default class ButtonNumber extends Component {
  render() {
    const { number, addLogicToEquation, evalEquation } = this.props
    const numberClass = " btn btn-number-" + number

    return (
      <button className={numberClass} onClick={() => {addLogicToEquation(number)}}>
        {number}
      </button>
    )
  }
}
