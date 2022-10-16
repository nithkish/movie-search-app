import { useEffect,useState } from "react";

/**
 * @description this custom hook returns debounced value based on the delay
 * @param {string} value - search value
 * @param {number} delay - debounce delay
 * @returns {string} debounced value
 */

export function useDebounce(value:string, delay:number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );
    return debouncedValue;
  }