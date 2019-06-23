import React from "react";

import { keys, defaultChecked } from "../../data/keys";

const Toggles = ({ onToggle }) => {
  return keys.map((key) => (
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
  ));
};

export default Toggles;
