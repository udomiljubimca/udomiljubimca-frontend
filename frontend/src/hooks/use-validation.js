import { useState } from "react";

const useValidation = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangedHandler = (event) => setEnteredValue(event.target.value);
  const inputBlurHandler = (event) => setIsTouched(true);

  console.log(valueChangedHandler);

  const resetInput = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    hasError,
    isTouched,
    isValid: valueIsValid,
    valueChangedHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useValidation;
