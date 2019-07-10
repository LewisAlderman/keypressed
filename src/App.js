import React from "react";
import { useSpring, a } from "react-spring";

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

  const floatProps = useSpring({
    to: eventInfo
      ? {
          boxShadow: `0 80px 40px -60px #e3f3ff`,
          transform: `translateY(-0.5min)`,
        }
      : {
          boxShadow: `0 40px 20px -30px #e3f3ff`,
          transform: `translateY(0vmin)`,
        },
    config: { tension: 650, friction: 35, mass: 1 },
  });

  return (
    <a.div style={floatProps} className={`App ${!!eventInfo && `floating`}`}>
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

      <div className={`shapes`}>
        <Polygon
          entered={!!eventInfo}
          className={`polygon ${!!eventInfo && `entered`}`}
        />
        <Ellipse
          entered={!!eventInfo}
          className={`ellipse ${!!eventInfo && `entered`}`}
        />
        <Rectangle
          entered={!!eventInfo}
          className={`rectangle ${!!eventInfo && `entered`}`}
        />
      </div>
    </a.div>
  );
}

export default App;
