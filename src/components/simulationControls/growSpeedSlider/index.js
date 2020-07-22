import React, { useContext } from "react";
import { BugsContext } from "globalState/bugs/index";
import { ScreenSizesContext } from "globalState/screenSizes/index"
import Slider from "shared/slider/index";
import { StyledContainer } from './styles'

function GrowSpeedSlider() {
  // global state
  const { growSpeed, setGrowSpeed } = useContext(BugsContext);
  const { xxs, xs, sm, md, lg, xl } = useContext(ScreenSizesContext)
  const small = (xxs || xs || sm)
  const big = (md || lg || xl)

  return (
    <StyledContainer>
      <Slider
        min={0}
        max={10}
        step={0.5}
        initial={growSpeed}
        name={"grow speed"}
        unit={"s"}
        doSomethingOnMouseUp={setGrowSpeed}
        sliderWidth={"150px"}
        containerStyle={{
          width: "200px",
        }}
      />
    </StyledContainer>
  );
}

export default GrowSpeedSlider;
