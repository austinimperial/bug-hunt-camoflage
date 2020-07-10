import React, { useContext } from "react";
import { BugsContext } from "globalState/bugs/index";
import { SvgDimensionsContext } from "globalState/svgContainerDimensions/index";
import { StyledButton, StyledContainer } from "./styles";

function ResetButton() {
  // global state
  const {
    populationSize,
    bugSize,
    setPopulationSnapshots,
    setBugs2,
    getInitialBugs,
    setStepCount
  } = useContext(BugsContext);
  const { svgContainerDimensions } = useContext(SvgDimensionsContext);

  const handleClick = () => {
    const newBugs = getInitialBugs(svgContainerDimensions, populationSize, bugSize);
    setBugs2(newBugs);
    setPopulationSnapshots([]);
    setStepCount(0)
  };

  return (
    <StyledContainer>
      <StyledButton onClick={handleClick}>reset</StyledButton>
    </StyledContainer>
  );
}

export default ResetButton;
