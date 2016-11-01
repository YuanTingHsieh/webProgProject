import React from 'react';

export default class CountDisplay extends React.Component {
  render() {
    return (
      <div>Still have {this.props.number} todos not finished yet!!!</div>
    );
  }
}