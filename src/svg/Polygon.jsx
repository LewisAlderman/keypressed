import React from "react";
import { useSpring, animated as a } from "react-spring";

const Polygon = ({ entered, ...props }) => {
  const springProps = useSpring({
    to: {
      transform: entered
        ? `translate(-110%, -80%) rotate(-150deg) scale(0.8)`
        : `translate(-170%, -10%) rotate(-25deg) scale(1)`,
    },
    config: { mass: 1, tension: 150, friction: 20 },
  });

  return (
    <a.svg
      style={springProps}
      width={230}
      height={200}
      fill="#FFB7C8"
      {...props}
    >
      <path d="M115 0l114.315 199.5H.685L115 0z" fill="inherit" />
    </a.svg>
  );
};

export default Polygon;
