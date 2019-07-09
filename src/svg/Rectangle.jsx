import React from "react";
import { useSpring, animated as a } from "react-spring";

const Rectangle = ({ entered, ...props }) => {
  const springProps = useSpring({
    to: {
      transform: entered
        ? `translate(40%, -50%) rotate(234deg) scale(2)`
        : `translate(-90%, -130%) rotate(25deg) scale(1)`,
    },
    config: {
      tension: 300,
      friction: 25,
      mass: 0.7,
    },
  });

  return (
    <a.svg style={springProps} width={361} height={128} fill="none" {...props}>
      <path fill="#FFF8BB" d="M0 0h361v128H0z" />
    </a.svg>
  );
};

export default Rectangle;
