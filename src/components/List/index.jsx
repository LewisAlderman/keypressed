import React from "react";

const List = ({ items, event }) => {
  return (
    <ul>
      {Object.entries(items).map(([key, bool]) =>
        bool ? (
          <li key={`output-${key}`}>
            <code>
              <span className="key">{key}</span>
              <span className="value">{`${event[key]}`}</span>
            </code>
          </li>
        ) : null,
      )}
    </ul>
  );
};

export default List;
