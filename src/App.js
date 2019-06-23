import React from "react";

import useToggledState from "./hooks/useToggledState";
import useKeypress from "./hooks/useKeypress";

import Toggles from "./components/Toggles";
import List from "./components/List";
import Polygon from "./svg/Polygon.jsx";
import Ellipse from "./svg/Ellipse.jsx";
import Rectangle from "./svg/Rectangle.jsx";

function App() {
  const eventInfo = useKeypress();
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
      <div className={`col col-left`}>
        <div className="wrapper">
          {/* Title */}
          <h1>Press on your keyboard</h1>

          {/* Toggles */}
          {eventInfo && <Toggles onToggle={handleChange} />}
        </div>
      </div>

      {eventInfo && (
        <div className={`col col-right`}>
          {/* Output */}
          <List items={toggled} event={eventInfo} />
        </div>
      )}

      <div className="shapes">
        <Polygon
          animated={Boolean(eventInfo)}
          className={`polygon ${eventInfo && "transitioned"}`}
        />
        <Ellipse
          animated={Boolean(eventInfo)}
          className={`ellipse ${eventInfo && "transitioned"}`}
        />
        <Rectangle
          animated={Boolean(eventInfo)}
          className={`rectangle ${eventInfo && "transitioned"}`}
        />
      </div>
    </div>
  );
}

export default App;
