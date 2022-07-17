import { useState } from 'react';
import './CSS/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [emptycalc, setcalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setcalc(calculate(emptycalc, e.target.innerHTML));
  };
  return (
    <ul className="calculator">
      <li data-testid="answer-slot" className="answer">{emptycalc.next || emptycalc.total || '0'}</li>
      <button
        type="button"
        name="AC"
        className="ac lightgrey width"
        onClick={handleClick}
      >
        AC
      </button>
      <button
        type="button"
        name="+/-"
        className="plus-minus lightgrey width"
        onClick={handleClick}
      >
        +/-
      </button>
      <button
        type="button"
        name="%"
        className="percentage lightgrey width"
        onClick={handleClick}
      >
        %
      </button>
      <button
        type="button"
        name="7"
        className="seven lightgrey width"
        onClick={handleClick}
      >
        7
      </button>
      <button
        data-testid="eight"
        type="button"
        name="8"
        className="eight lightgrey width"
        onClick={handleClick}
      >
        8
      </button>
      <button
        type="button"
        name="÷"
        className="division orange width"
        onClick={handleClick}
      >
        ÷
      </button>
      <button
        type="button"
        name="9"
        className="nine lightgrey width"
        onClick={handleClick}
      >
        9
      </button>
      <button
        type="button"
        name="x"
        className="multiply orange width"
        onClick={handleClick}
      >
        x
      </button>
      <button
        type="button"
        name="4"
        className="four lightgrey width"
        onClick={handleClick}
      >
        4
      </button>
      <button
        type="button"
        name="5"
        className="five lightgrey width"
        onClick={handleClick}
      >
        5
      </button>
      <button
        type="button"
        name="6"
        className="six lightgrey width"
        onClick={handleClick}
      >
        6
      </button>
      <button
        type="button"
        name="-"
        className="minus orange width"
        onClick={handleClick}
      >
        -
      </button>
      <button
        type="button"
        name="1"
        className="one lightgrey width"
        onClick={handleClick}
      >
        1
      </button>
      <button
        type="button"
        name="2"
        className="two lightgrey width"
        onClick={handleClick}
      >
        2
      </button>
      <button
        type="button"
        name="3"
        className="three lightgrey width"
        onClick={handleClick}
      >
        3
      </button>
      <button
        type="button"
        name="+"
        className="plus orange width"
        onClick={handleClick}
      >
        +
      </button>
      <button
        type="button"
        name="0"
        className="zero lightgrey"
        onClick={handleClick}
      >
        0
      </button>
      <button
        type="button"
        name="."
        className="decimal lightgrey width"
        onClick={handleClick}
      >
        .
      </button>
      <button
        type="button"
        name="="
        className="equal orange width"
        onClick={handleClick}
      >
        =
      </button>
    </ul>
  );
};

export default Calculator;
