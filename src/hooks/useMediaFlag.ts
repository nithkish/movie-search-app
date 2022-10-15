import { useState, useEffect } from "react";

/**
 * @description this custom hook checks window's size
 * @param {string} mediaParam
 * @returns {boolean} true if current screen resolution matches input range
 */
function useMediaFlag(mediaParam: string) {
  const [match, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    window
      .matchMedia(mediaParam)
      .addEventListener("change", (event) => setMatch(event.matches));
  }, [window.innerWidth]);

  return match;
}

export default useMediaFlag;
