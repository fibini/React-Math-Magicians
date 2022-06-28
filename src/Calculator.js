import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <ul className="calculator">
        <li className="answer">0</li>
        <li className="ac lightgrey">AC</li>
        <li className="plus-minus lightgrey">+/-</li>
        <li className="percentage lightgrey">%</li>
        <li className="seven lightgrey">7</li>
        <li className="eight lightgrey">8</li>
        <li className="division orange">÷</li>
        <li className="nine lightgrey">9</li>
        <li className="multiply orange">x</li>
        <li className="four lightgrey">4</li>
        <li className="five lightgrey">5</li>
        <li className="six lightgrey">6</li>
        <li className="minus orange">-</li>
        <li className="one lightgrey">1</li>
        <li className="two lightgrey">2</li>
        <li className="three lightgrey">3</li>
        <li className="plus orange">+</li>
        <li className="zero lightgrey">0</li>
        <li className="decimal lightgrey">.</li>
        <li className="equal orange">=</li>
      </ul>
    );
  }
}

export default Calculator;
