import { useEffect, useState } from "react";

export function useLocalStorage (key, initialValue) {
  /** 
  * we are using a state because we want to receive state 
  * updates when the value changes but at the same time we
  * want the changes to persist so we are using localStorage
  */
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : initialValue;
  });

  // update the persisted value whenever the key or value change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value])

  // return the state and setState (to be used anywhere setState could be used)
  return [value, setValue];
}