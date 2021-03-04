import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="grid-container">
      <div class="selectedCurrency currency-1">
        <button aria-label="Close" class="closeButton">
          <span aria-hidden="true">×</span>
        </button>
        <label>EUR</label>
      </div>
      <div class="selectedCurrency currency-2">
        <button aria-label="Close" class="closeButton">
          <span aria-hidden="true">×</span>
        </button>
        <label>CZK</label>
      </div>
      <div class="selectedCurrency currency-3">
        <button aria-label="Close" class="closeButton">
          <span aria-hidden="true">×</span>
        </button>
        <label>RUB</label>
      </div>
      <button class="button">
        <input type="checkbox" />
        <label>EUR</label>
      </button>
      <button href="#" class="button">
        <input type="checkbox" />
        <label>PLN</label>
      </button>
      <button href="#" class="button">
        <input type="checkbox" />
        <label>GEL</label>
      </button>
      <button href="#" class="button">
        <input type="checkbox" />
        <label>DKK</label>
      </button>
      <button href="#" class="button">
        <input type="checkbox" />
        <label>CZK</label>
      </button>
      <button href="#" class="button">
        <input type="checkbox" />
        <label>GBP</label>
      </button>
      <button href="#" class="button">
        <input type="checkbox" />
        <label>SEK</label>
      </button>
      <button href="#" class="button">
        <input type="checkbox" />
        <label>USD</label>
      </button>
      <button href="#" class="button">
        <input type="checkbox" />
        <label>RUB</label>
      </button>
    </div>
  );
}

export default App;
