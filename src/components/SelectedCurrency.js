import React from "react";

class SelectedCurrency extends React.Component {
  render() {
    return (
      <div className="selectedCurrency currency-1">
        <button aria-label="Close" className="closeButton"
        onClick={() => this.props.handleClick(this.props.item.id, this.props.item.isSelected)}>
          <span aria-hidden="true">×</span>
        </button>
        <label>{this.props.item.name.toLowerCase()}</label>
      </div>
    );
  }
}

export default SelectedCurrency;
