import React, { useContext } from "react";
import { BugsContext } from "globalState/bugs/index";
import Slider from "shared/slider/index";

function GrowSpeedSlider() {
  // global state
  const { maxMutationStep, setMaxMutationStep } = useContext(BugsContext);

  return (
    <Slider
      min={0}
      max={255}
      step={3}
      initial={maxMutationStep}
      name={"max mutation step"}
      doSomethingOnMouseUp={setMaxMutationStep}
      containerStyle={{
        margin: "20px 20px 0px 20px",
      }}
    />
  );
}

export default GrowSpeedSlider;
