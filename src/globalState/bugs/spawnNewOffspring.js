import getOffspringCoors from "./getOffspringCoors";
import getColorMutation from "./getColorMutation";

const getRandomSurvivor = (allBugs, indexOfEatenBug, populationSize) => {
  const onlySurvivors = allBugs.slice(0, populationSize);
  onlySurvivors.splice(indexOfEatenBug, 1);
  return onlySurvivors[Math.floor(Math.random() * onlySurvivors.length)];
};

// picks a random surviving bug (aka not the just-eaten bug) as the parent bug for color mutation
// mutates color, chooses new random coordinates within the given radius of the just-eaten bug
export default function spawnNewOffspring(
  setBugs,
  canvasDimensions,
  maxOffspringDistance,
  eatenBug,
  allBugs,
  bugSize,
  i,
  populationSize
) {
  setBugs((prevBugs) => {
    const offSpringCoors = getOffspringCoors(
      maxOffspringDistance,
      eatenBug,
      canvasDimensions,
      bugSize
    );
    const newBug = {
      x: offSpringCoors.x,
      y: offSpringCoors.y,
      color: getColorMutation(
        getRandomSurvivor(allBugs, i, populationSize),
        maxOffspringDistance
      ),
    };
    const newBugs = [newBug, ...prevBugs];
    return newBugs;
  });
}