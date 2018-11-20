import React, { Component } from 'react';

class CalculatorButton extends React.Component {
  render() {
    return <div className="c-btn" id={this.props.id} onClick={this.props.handler}>{this.props.value}</div>
  }
}

export default CalculatorButton;