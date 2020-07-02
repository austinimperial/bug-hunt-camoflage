import getRandomRGB from "./getRandomRGB";
import getRandCoors from "./getRandCoors";

export default function getInitialBugs(
  canvasDimensions,
  populationSize,
  setBugs,
  bugSize
) {
  var newBugs = [];
  let i;
  for (i = 0; i < populationSize; i++) {
    const randCoors = getRandCoors(canvasDimensions, bugSize);
    newBugs = [
      ...newBugs,
      {
        x: randCoors.x,
        y: randCoors.y,
        color: getRandomRGB(),
      },
    ];
  }

  setBugs(newBugs);
}