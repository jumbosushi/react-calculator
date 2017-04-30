import React, { Component } from 'react';

export default class ButtonEquation extends Component {
  render() {
    const { equation, addLogicToEquation, evalEquation } = this.props
    const equationClass = "btn btn-equation-" + equation

    return (
      <button className={equationClass} onClick={() => {evalEquation ? evalEquation() : addLogicToEquation(equation)}}>
        {equation}
      </button>
    )
  }
}
