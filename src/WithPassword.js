import React from 'react';

export default class WithPassword extends React.Component {
  state = {
    type: 'password'
  };

  handleTypeChange = type => {
    this.setState({ type });
  }

  render() {
    const { type } = this.state;

    return (
      this.props.render({ type, handleTypeChange: this.handleTypeChange })
    );
  }
}