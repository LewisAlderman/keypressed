import React, { useState } from "react";

import { keys, defaultChecked } from "./data/keys";
import useKeypress from "./hooks/useKeypress";

function App() {
  const [toggled, setToggled] = useState(
    keys.reduce(
      (list, val) => ({ ...list, [val]: defaultChecked.includes(val) }),
      {},
    ),
  );

  const handleChange = (e) => {
    e.persist();
    setToggled((state) => ({
      ...state,
      [e.target.name]: !state[e.target.name],
    }));
  };

  const eventInfo = useKeypress();

  return (
    <div className="App">
      {/* Title */}
      <h1>Press on your keyboard</h1>

      {/* Toggles */}
      {keys.map((key) => (
        <label htmlFor={key} key={`toggle-${key}`} onChange={handleChange}>
          <input
            type="checkbox"
            name={key}
            id={key}
            value={key}
            defaultChecked={toggled[key]}
          />
          {key}
        </label>
      ))}

      {/* Output */}
      {eventInfo && (
        <ul>
          {Object.entries(toggled).map(([key, bool]) =>
            bool ? (
              <li key={`output-${key}`}>
                {key}: {`${eventInfo[key]}`}
              </li>
            ) : null,
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
