import getOffspringCoors from "./getOffspringCoors";
import getColorMutation from "./getColorMutation";
import uuid from "react-uuid";

const getRandomSurvivor = (allBugs, indexOfEatenBug, populationSize) => {
  const onlySurvivors = allBugs.slice(0, populationSize);
  onlySurvivors.splice(indexOfEatenBug, 1);
  return onlySurvivors[Math.floor(Math.random() * onlySurvivors.length)];
};

// picks a random surviving bug (aka not the just-eaten bug) as the parent bug for color mutation
// mutates color, chooses new random coordinates within the given radius of the just-eaten bug
export default function getNewOffspring(
  canvasDimensions,
  maxOffspringDistance,
  eatenBug,
  allBugs,
  bugSize,
  i,
  populationSize,
  maxMutationStep
) {
  const offSpringCoors = getOffspringCoors(
    maxOffspringDistance,
    eatenBug,
    canvasDimensions,
    bugSize
  );
  const randomSurvivor = getRandomSurvivor(allBugs, i, populationSize)

  const newBug = {
    x: offSpringCoors.x,
    y: offSpringCoors.y,
    ancestor: randomSurvivor.ancestor,
    color: getColorMutation(
      randomSurvivor,
      maxMutationStep
    ),
    id: uuid(),
    orientation: Math.floor(Math.random() * 360),
  };
  return newBug;
}