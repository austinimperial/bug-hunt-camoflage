import {
  throttledFormatOrganismPath,
  slightlyThrottledFormatOrganismPath,
} from "./formatOrganismPath";
import getOrganismList from "./getOrganismList";

const getOrganisms = ({
  populationSnapshots,
  populationSize,
  stretchFactor,
  thickness,
  screenDimensions,
  isVertical,
  throttle,
}) => {
  const orgList = getOrganismList(populationSnapshots);

  if (!throttle) {
    return slightlyThrottledFormatOrganismPath({
      organismList: orgList,
      populationSnapshots,
      stretchFactor,
      thickness,
      populationSize,
      isVertical,
      screenDimensions,
    });
  }

  return throttledFormatOrganismPath({
    organismList: orgList,
    populationSnapshots,
    stretchFactor,
    thickness,
    populationSize,
    isVertical,
    screenDimensions,
  });
};

export default getOrganisms;
