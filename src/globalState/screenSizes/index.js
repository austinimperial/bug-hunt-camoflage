import React, { useState, useEffect } from "react";
import { getScreenSizes } from "./getScreenSizes";
import { getWidth } from "./getWidth";
export const ScreenSizesContext = React.createContext();
const _ = require("lodash");

function ScreenSizesProvider({ children }) {
  const [screenSizes, setScreenSizes] = useState(getScreenSizes(getWidth()));
  const [width, setWidth] = useState(0);
  const [prevScreenSize, setPrevScreenSize] = useState("a");

  useEffect(() => {
    const updateWidth = () => setWidth(getWidth());

    window.addEventListener("resize", _.throttle(updateWidth, 200));
    return () =>
      window.removeEventListener("resize", _.throttle(updateWidth, 200));
  }, []);

  const getScreenSize = (screenSizes) => {
    // returns the current screen size as a string
    return Object.entries(screenSizes).filter((entry) => entry[1])[0][0];
  };

  useEffect(() => {
    // only update screenSizes if prev is different than current
    const currentScreenSizes = getScreenSizes(getWidth());
    if (_.isEqual(currentScreenSizes, screenSizes)) return;

    setScreenSizes((prevScreenSizes) => {
      setPrevScreenSize(getScreenSize(prevScreenSizes));
      return currentScreenSizes;
    });
  }, [width, setScreenSizes]);

  const sizeRanges = {
    xxs: [0, 468],
    xs: [468, 576],
    sm: [576, 768],
    md: [768, 992],
    lg: [992, 1200],
    xl: [1200, 100000],
  };

  const value = {
    ...screenSizes,
    prevScreenSize,
    sizeRanges,
  };

  return (
    <ScreenSizesContext.Provider value={value}>
      {children}
    </ScreenSizesContext.Provider>
  );
}

export default ScreenSizesProvider;
