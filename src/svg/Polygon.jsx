import React from "react";
import { useSpring, animated as a } from "react-spring";

const Polygon = ({ entered, ...props }) => {
  const plusOrMinus = n => {
    const rand = Math.floor(Math.random() * 15);
    return Math.random() > 0.5 ? n + rand : n - rand;
  };

  const [springProps, set] = useSpring(() => ({
    to: { transform: `translate(-170%, -10%) rotate(-25deg) scale(1)` },
    config: { tension: 655, friction: 30, mass: 0.5 },
  }));

  if (entered) {
    set(() => ({
      to: { transform: `translate(${plusOrMinus(-110)}%, ${plusOrMinus(-80)}%) rotate(${plusOrMinus(-150)}deg) scale(0.8)` },
    }))
  }

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
