import { useState } from "react";

const VisibilityToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [isVisible, setIsVisible] = useState(initialState);
  const toggle = () => setIsVisible((prev) => !prev);

  return [isVisible, toggle];
};

export default VisibilityToggle;
