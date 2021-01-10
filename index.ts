import { DistanceMeter } from "./distanceMeter";
import { data } from "./clearData";

const main = () => {
  const distMeter = new DistanceMeter(data);
  const [x, y] = distMeter.getFinalPoint();

  console.log("--- SOLUTION ---");
  console.log(
    `You are ${distMeter.getTotalDistance()} blocks away from lesson up.`,
    `Go ${Math.abs(y)} blocks ${y < 0 ? "South" : "North"} and ${Math.abs(
      x
    )} blocks ${x < 0 ? "East" : "West"} to reach the destination .`
  );
};

main();
