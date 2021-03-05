import React from "react";

class SelectedCurrency extends React.Component {
  render() {
    return (
      <div className="selectedCurrency currency-1">
        <button aria-label="Close" className="closeButton">
          <span aria-hidden="true">×</span>
        </button>
        <label>{this.props.name}</label>
      </div>
    );
  }
}

export default SelectedCurrency;
