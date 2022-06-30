import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const state = (calculate(this.state, e.target.innerHTML));
    this.setState(state);
  }

  value() {
    const { next, total } = this.state;
    if (next) {
      return next;
    }
    return total;
  }

  render() {
    return (
      <ul className="calculator">
        <li className="answer">{this.value() || '0'}</li>
        <button type="button" name="AC" className="ac lightgrey" onClick={this.handleClick}>
          AC
        </button>
        <button
          type="button"
          name="+/-"
          className="plus-minus lightgrey"
          onClick={this.handleClick}
        >
          +/-
        </button>
        <button
          type="button"
          name="%"
          className="percentage lightgrey"
          onClick={this.handleClick}
        >
          %
        </button>
        <button type="button" name="7" className="seven lightgrey" onClick={this.handleClick}>
          7
        </button>
        <button type="button" name="8" className="eight lightgrey" onClick={this.handleClick}>
          8
        </button>
        <button type="button" name="÷" className="division orange" onClick={this.handleClick}>
          ÷
        </button>
        <button type="button" name="9" className="nine lightgrey" onClick={this.handleClick}>
          9
        </button>
        <button type="button" name="x" className="multiply orange" onClick={this.handleClick}>
          x
        </button>
        <button type="button" name="4" className="four lightgrey" onClick={this.handleClick}>
          4
        </button>
        <button type="button" name="5" className="five lightgrey" onClick={this.handleClick}>
          5
        </button>
        <button type="button" name="6" className="six lightgrey" onClick={this.handleClick}>
          6
        </button>
        <button type="button" name="-" className="minus orange" onClick={this.handleClick}>
          -
        </button>
        <button type="button" name="1" className="one lightgrey" onClick={this.handleClick}>
          1
        </button>
        <button type="button" name="2" className="two lightgrey" onClick={this.handleClick}>
          2
        </button>
        <button type="button" name="3" className="three lightgrey" onClick={this.handleClick}>
          3
        </button>
        <button type="button" name="+" className="plus orange" onClick={this.handleClick}>
          +
        </button>
        <button type="button" name="0" className="zero lightgrey" onClick={this.handleClick}>
          0
        </button>
        <button
          type="button"
          name="."
          className="decimal lightgrey"
          onClick={this.handleClick}
        >
          .
        </button>
        <button type="button" name="=" className="equal orange" onClick={this.handleClick}>
          =
        </button>
      </ul>
    );
  }
}

export default Calculator;
