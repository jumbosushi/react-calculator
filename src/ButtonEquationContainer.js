import React, { Component,  } from 'react';
import ButtonEquation from './ButtonEquation.js'

export default class ButtonEquationContainer extends Component {
  componentWillUpdate() {
    console.log("==== Component Updated!");
  }
  render() {
    return(
      <div className="equations">
        <div className="btn-equation-container">
          <ButtonEquation equation="+" addLogicToEquation={this.props.addLogicToEquation} />
          <ButtonEquation equation="-" addLogicToEquation={this.props.addLogicToEquation} />
          <ButtonEquation equation="*" addLogicToEquation={this.props.addLogicToEquation} />
          <ButtonEquation equation="/" addLogicToEquation={this.props.addLogicToEquation} />
          <ButtonEquation equation="=" evalEquation={this.props.evalEquation} />
        </div>
      </div>
    )
  }
}
