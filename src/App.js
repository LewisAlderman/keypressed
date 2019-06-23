import React from "react";

import useToggledState from "./hooks/useToggledState";

import Toggles from "./components/Toggles";
import List from "./components/List";

function App() {
  const [toggled, setToggled] = useToggledState();

  const handleChange = (e) => {
    e.persist();
    setToggled((state) => ({
      ...state,
      [e.target.name]: !state[e.target.name],
    }));
  };

  return (
    <div className="App">
      {/* Title */}
      <h1>Press on your keyboard</h1>

      {/* Toggles */}
      <Toggles onToggle={handleChange} />

      {/* Output */}
      <List items={toggled} />
    </div>
  );
}

export default App;
