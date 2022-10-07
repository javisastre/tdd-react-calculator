import { useState } from "react";
import { evaluate } from "mathjs";

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
export const operations = ["+", "-", "*", "/"];
export const equalSign = "=";

export const Calculator = () => {
  const [value, setValue] = useState("");

  const handleButtons = (el) => () => setValue(value.concat(el));

  return (
    <div>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((r, i) => (
          <div role='row' key={i}>
            {r.map((n) => (
              <button key={n} onClick={handleButtons(n)}>
                {n}
              </button>
            ))}
          </div>
        ))}
        {operations.map((o) => (
          <button key={o} onClick={handleButtons(o)}>
            {o}
          </button>
        ))}
        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>
    </div>
  );
};
