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

  handleClick(id) {
    this.setState((prevState) => {
      const updatedCurrencyData = prevState.currencies.map((currency) => {
        if (currency.id === id) {
          currency.isSelected = !currency.isSelected;
        }
        console.log(currency)
        return currency;
      });
      console.log(updatedCurrencyData);

      return {
        currencies: updatedCurrencyData,
      };
    });
  }

  render() {
    const currencyItems = this.state.currencies.map((item) => (
      <Currency key={item.id} item={item} handleClick={this.handleClick} />
    ));

    return (
      <div className="outerContainer">
        <div className="gridContainer">
          <SelectedCurrency name={"EUR"} />
          <SelectedCurrency name={"CZK"} />
          <SelectedCurrency name={"RUB"} />
        </div>
        <div className="gridContainer">{currencyItems}</div>
      </div>
    );
  }
}

export default App;
