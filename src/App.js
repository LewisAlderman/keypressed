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
          boxShadow: `0 50px 40px -40px #e3f3ff`,
          transform: `translateY(-10px)`,
        }
      : {
          boxShadow: `0 40px 25px -30px #e3f3ff`,
          transform: `translateY(0px)`,
        },
    config: { tension: 370, friction: 10 },
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

      <div className="shapes">
        <Polygon entered={!!eventInfo} className={`polygon`} />
        <Ellipse entered={!!eventInfo} className={`ellipse`} />
        <Rectangle entered={!!eventInfo} className={`rectangle`} />
      </div>
    </a.div>
  );
}

export default App;
