export type DirKeys = "R" | "L";
export type DataType = [DirKeys, number][];
export type VectorType = [number, number];
export type DirectionsType = "N" | "W" | "S" | "E";
export interface Vectors {
  N: [0, 1];
  S: [0, -1];
  W: [1, 0];
  E: [-1, 0];
}
