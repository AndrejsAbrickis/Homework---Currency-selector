import "./App.css";
import SelectedCurrency from "./components/SelectedCurrency";
import React from "react";
import currencyData from "./currencyData";
import Currency from "./components/Currency";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currencies: currencyData,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, isSelected) {
    this.setState((prevState) => {
      const updatedCurrencyData = prevState.currencies.map((currency) => {
        if (currency.id === id) {
          return {
            ...currency,
            isSelected: !isSelected,
          };
        }
        return currency;
      });

      return {
        currencies: updatedCurrencyData,
      };
    });
  }

  render() {
    const currencyItems = this.state.currencies.map((item) => (
      <Currency key={item.id} item={item} handleClick={this.handleClick} />
    ));

    const selected = this.state.currencies.filter(
      (item) => item.isSelected === true
    );

    const selectedCurrencies = selected.map((item) => (
      <SelectedCurrency key={item.id} item={item} handleClick={this.handleClick}/>
    ));

    return (
      <div className="outerContainer">
        <div className="gridContainerSelected">{selectedCurrencies}</div>
        <div className="gridContainer">{currencyItems}</div>
      </div>
    );
  }
}

export default App;
