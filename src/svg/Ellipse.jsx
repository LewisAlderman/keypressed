import React from "react";
import { useSpring, animated as a } from "react-spring";

const Ellipse = ({ animated, ...props }) => {
  const springProps = useSpring({
    to: {
      transform: animated
        ? `translate(-120%, 30%) scale(1)`
        : `translate(30%, -60%) scale(0.5)`,
    },
    config: {
      tension: 140,
      friction: 20,
      duration: 50,
    },
  });

  return (
    <a.svg style={springProps} width={200} height={200} fill="none" {...props}>
      <circle cx={100} cy={100} r={100} fill="#B4CDFF" />
    </a.svg>
  );
};

export default Ellipse;
