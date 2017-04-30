import React, { Component, PropTypes } from 'react';
import ButtonNumber from './ButtonNumber.js'

export default class ButtonNumberContainer extends Component {
  render() {
    return(
      <div className="numbers">
        <div className="btn-number-container">
          <ButtonNumber number="0" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
          <ButtonNumber number="1" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
          <ButtonNumber number="2" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
          <ButtonNumber number="3" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
          <ButtonNumber number="4" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
          <ButtonNumber number="5" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
          <ButtonNumber number="6" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
          <ButtonNumber number="7" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
          <ButtonNumber number="8" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
          <ButtonNumber number="9" addLogicToEquation={this.props.addLogicToEquation} ></ButtonNumber>
        </div>
      </div>
    )
  }
}
