import React from "react";

class Currency extends React.Component {
  render() {
    return (
      <button
        className={"button " + (this.props.item.isSelected ? "selected" : " ")}
        onClick={() =>
          this.props.handleClick(this.props.item.id, this.props.item.isSelected)
        }
      >
        <div className="fakeCheckbox"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9.819"
          height="13.399"
          viewBox="0 0 9.819 13.399"
        >
          <g
            id="Component_1_1"
            data-name="Component 1 – 1"
            transform="translate(0.409 0.287)"
          >
            <line
              id="Line_2"
              data-name="Line 2"
              x2="9"
              y2="12.825"
              fill="none"
              stroke="red"
              strokeWidth="1"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              x1="9"
              y2="12.825"
              fill="none"
              stroke="red"
              strokeWidth="1"
            />
          </g>
        </svg>
        <label>{this.props.item.name}</label>
      </button>
    );
  }
}

export default Currency;
