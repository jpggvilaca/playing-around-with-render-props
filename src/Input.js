import React from 'react';
import WithPassword from './WithPassword';

export default class Input extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value });
  }

  render() {
    const { value } = this.state;

    return (
      <WithPassword
        render={({ type, handleChangeType }) => {
          return <input type={type} name="someInput" value={value} onChange={this.handleChange} />
        }}
      />
    );
  }
}