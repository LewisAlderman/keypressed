import React from "react";
import { useSpring, animated as a } from "react-spring";

const Rectangle = ({ entered, ...props }) => {
  const plusOrMinus = n => {
    const rand = Math.floor(Math.random() * 15);
    return Math.random() > 0.5 ? n + rand : n - rand;
  };

  const [springProps, set] = useSpring(() => ({
    to: {
      transform: `translate(-90%, -130%) rotate(25deg) scale(1)`,
    },
    config: {
      tension: 700,
      friction: 35, mass: 0.5
    },
  }));

  if (entered) {
    set(() => ({
      to: { transform: `translate(${plusOrMinus(40)}%, ${plusOrMinus(-50)}%) rotate(${plusOrMinus(234)}deg) scale(2)` }
    }))
  }

  return (
    <a.svg style={springProps} width={361} height={128} fill="none" {...props}>
      <path fill="#FFF8BB" d="M0 0h361v128H0z" />
    </a.svg>
  );
};

export default Rectangle;
