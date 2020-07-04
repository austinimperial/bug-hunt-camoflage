import React, { useContext } from "react";
import { BugsContext } from "globalState/bugs/index";
import Slider from "shared/slider/index";

function GrowSpeedSlider() {
  // global state
  const { growSpeed, setGrowSpeed } = useContext(BugsContext);

  return (
    <Slider
      min={0}
      max={10}
      step={0.5}
      initial={growSpeed}
      name={"grow speed"}
      unit={"s"}
      doSomethingOnMouseUp={setGrowSpeed}
      containerStyle={{
        margin: "20px 20px 0px 20px",
      }}
    />
  );
}

export default GrowSpeedSlider;
