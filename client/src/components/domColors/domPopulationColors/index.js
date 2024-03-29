import React, { useContext, useState, useEffect } from "react";
import { BugsContext } from "globalState/bugs/BugsProvider";
import getBugPalette from "./getBugPalette";
import uuid from "react-uuid";
import { StyledSwatch } from "./styles";
import {
  StyledSwatchContainer,
  StyledTitle,
  StyledContainer,
} from "../shared/styles";

function DomPopulationColors({ maxColorCount }) {
  // local state
  const [palette, setPalette] = useState(
    Array(maxColorCount).fill([255, 255, 255])
  );

  // global state
  const { bugs, populationSize, getLivingBugNodes } = useContext(BugsContext);

  useEffect(() => {
    const livingBugs = getLivingBugNodes(bugs, true);
    const bugPalette = getBugPalette(livingBugs, maxColorCount);
    setPalette(bugPalette);
  }, [bugs, setPalette, populationSize, maxColorCount, getLivingBugNodes]);

  return (
    <StyledContainer>
      <StyledTitle>dominant colors in population</StyledTitle>
      <StyledSwatchContainer>
        {palette.map((color) => (
          <StyledSwatch
            key={uuid()}
            color={color}
            veryLight={color[0] > 240 && color[1] > 240 && color[2] > 240}
          ></StyledSwatch>
        ))}
      </StyledSwatchContainer>
    </StyledContainer>
  );
}

export default DomPopulationColors;
