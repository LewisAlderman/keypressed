import React from "react";

import useKeypress from "../../hooks/useKeypress";

const List = ({ items }) => {
  const eventInfo = useKeypress();
  return (
    (eventInfo && (
      <ul>
        {Object.entries(items).map(([key, bool]) =>
          bool ? (
            <li key={`output-${key}`}>
              {key}: {`${eventInfo[key]}`}
            </li>
          ) : null,
        )}
      </ul>
    )) ||
    null
  );
};

export default List;
