import React from "react";

class Currency extends React.Component {
  render() {
    return (
      <button className="button" onClick={() => this.props.handleClick(this.props.item.id)}>
        <input type="checkbox" />
        <label>{this.props.item.name}</label>
      </button>
    );
  }
}

export default Currency;
