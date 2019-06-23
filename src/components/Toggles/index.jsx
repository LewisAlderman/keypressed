import React from "react";

import { keys, defaultChecked } from "../../data/keys";
import "./styles.scss";

const Toggles = ({ onToggle }) => {
  return (
    <div className={`toggles container`}>
      {keys.map((key) => (
        <label htmlFor={key} key={`toggle-${key}`} onChange={onToggle}>
          <input
            type="checkbox"
            name={key}
            id={key}
            value={key}
            defaultChecked={defaultChecked.includes(key)}
          />
          {key}
        </label>
      ))}
    </div>
  );
};

export default Toggles;
