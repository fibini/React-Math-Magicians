import { useState } from 'react';
import calculate from './logic/calculate';

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
        className="ac lightgrey"
        onClick={handleClick}
      >
        AC
      </button>
      <button
        type="button"
        name="+/-"
        className="plus-minus lightgrey"
        onClick={handleClick}
      >
        +/-
      </button>
      <button
        type="button"
        name="%"
        className="percentage lightgrey"
        onClick={handleClick}
      >
        %
      </button>
      <button
        type="button"
        name="7"
        className="seven lightgrey"
        onClick={handleClick}
      >
        7
      </button>
      <button
        data-testid="eight"
        type="button"
        name="8"
        className="eight lightgrey"
        onClick={handleClick}
      >
        8
      </button>
      <button
        type="button"
        name="÷"
        className="division orange"
        onClick={handleClick}
      >
        ÷
      </button>
      <button
        type="button"
        name="9"
        className="nine lightgrey"
        onClick={handleClick}
      >
        9
      </button>
      <button
        type="button"
        name="x"
        className="multiply orange"
        onClick={handleClick}
      >
        x
      </button>
      <button
        type="button"
        name="4"
        className="four lightgrey"
        onClick={handleClick}
      >
        4
      </button>
      <button
        type="button"
        name="5"
        className="five lightgrey"
        onClick={handleClick}
      >
        5
      </button>
      <button
        type="button"
        name="6"
        className="six lightgrey"
        onClick={handleClick}
      >
        6
      </button>
      <button
        type="button"
        name="-"
        className="minus orange"
        onClick={handleClick}
      >
        -
      </button>
      <button
        type="button"
        name="1"
        className="one lightgrey"
        onClick={handleClick}
      >
        1
      </button>
      <button
        type="button"
        name="2"
        className="two lightgrey"
        onClick={handleClick}
      >
        2
      </button>
      <button
        type="button"
        name="3"
        className="three lightgrey"
        onClick={handleClick}
      >
        3
      </button>
      <button
        type="button"
        name="+"
        className="plus orange"
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
        className="decimal lightgrey"
        onClick={handleClick}
      >
        .
      </button>
      <button
        type="button"
        name="="
        className="equal orange"
        onClick={handleClick}
      >
        =
      </button>
    </ul>
  );
};

export default Calculator;
