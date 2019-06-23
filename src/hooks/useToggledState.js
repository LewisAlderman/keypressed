import { useState } from "react";
import { keys, defaultChecked } from "../data/keys";

function useToggledState() {
  const [toggled, setToggled] = useState(
    keys.reduce(
      (list, val) => ({ ...list, [val]: defaultChecked.includes(val) }),
      {},
    ),
  );

  return [toggled, setToggled];
}

export default useToggledState;
