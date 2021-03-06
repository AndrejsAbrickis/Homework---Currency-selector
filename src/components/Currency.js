import React from "react";

class Currency extends React.Component {
  render() {
    return (
      <button className="button" 
      onClick={() => this.props.handleClick(this.props.item.id, this.props.item.isSelected)}>
        <input type="checkbox" />
        <label>{this.props.item.name}</label>
      </button>
    );
  }
}

export default Currency;
