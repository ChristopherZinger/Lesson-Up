import { VectorType, DirectionsType, Vectors, DataType } from "./types.d";

export class DistanceMeter {
  private dataVectors: VectorType[];
  private currendDirection: DirectionsType = "N";
  private readonly directions: DirectionsType[] = ["N", "W", "S", "E"]; // directions in counter clockwise order
  private readonly orientationVectors: Vectors = {
    N: [0, 1],
    S: [0, -1],
    W: [1, 0],
    E: [-1, 0],
  };

  private readonly turn = {
    L: 1, // left
    R: -1, // right
  };

  constructor(data: DataType) {
    // convert data to vectors
    this.dataVectors = data.map((el) => {
      const [vectorTurn, vectorValue] = el;
      this.setCurrentDirection(this.turn[vectorTurn]);
      const vectorDirection: VectorType = this.orientationVectors[
        this.currendDirection
      ];
      return vectorDirection.map((i) => i * vectorValue) as VectorType;
    });
  }

  private setCurrentDirection(turnDirection: number): void {
    let newDirectionIndex =
      this.directions.indexOf(this.currendDirection) + turnDirection;
    if (newDirectionIndex < 0) newDirectionIndex = this.directions.length - 1;
    if (newDirectionIndex >= this.directions.length) newDirectionIndex = 0;
    this.currendDirection = this.directions[newDirectionIndex];
  }

  public getFinalPoint(): VectorType {
    return this.dataVectors.reduce(
      (acc, curr) => [acc[0] + curr[0], acc[1] + curr[1]],
      [0, 0]
    );
  }

  public getTotalDistance() {
    const [x, y] = this.getFinalPoint();
    return Math.abs(x) + Math.abs(y);
  }
}
