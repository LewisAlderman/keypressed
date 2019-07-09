import React from "react";
import { useSpring, animated as a } from "react-spring";

const Ellipse = ({ entered, ...props }) => {
  const plusOrMinus = n => {
    const rand = Math.floor(Math.random() * 15);
    return Math.random() > 0.5 ? n + rand : n - rand;
  };

  const [springProps, set] = useSpring(() => ({
    to: {
      transform: `translate(30%, -60%) scale(0.5)`,
    },
    config: {
      tension: 700,
      friction: 30, mass: 0.5
    },
  }));

  if (entered) {
    set(() => ({
      to: { transform: `translate(${plusOrMinus(-120)}%, ${plusOrMinus(30)}%) scale(1)` }
    }))
  }

  return (
    <a.svg style={springProps} width={200} height={200} fill="none" {...props}>
      <circle cx={100} cy={100} r={100} fill="#B4CDFF" />
    </a.svg>
  );
};

export default Ellipse;
