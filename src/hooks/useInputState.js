import { useState } from "react";

const useInputState = (defaultValue = "") => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const handleInputValue = (value) => {
    setInputValue(value);
  };
  return {
    value: inputValue,
    onChange: handleInputValue,
  };
};

export default useInputState;
