import { DataType, DirKeys } from "./types.d";

const dataString = `R3, L5, R4, R3, L3, L3, R2, R4, R1, L2, L5, R5, R5, R2, R2, R1, L2,
L3, L2, L1, R3, L5, R187, R1, R2, L1, L3, R4, L4, R49, L4, R2, R72,
L3, L2, R3, R3, R192, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2,
R4, L4, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2,
R2, R3, L3, R5, R2, R5, R3, R5, L3, R5, L3, R1, R2, R2, L4, L5, L1,
L2, R4, R3, R3, R2, L1, L2, R5, R5, L2, R3, L4, L5, L5, L4, R4, L2,
R1, R1, L2, L3, L2, R2, L4, R3, R2, L2, L3, L6, L4, L2, R2, L3, L4,
L2, L5, L3, R4, R3, L5, L1, L3, R4, R5, L4, L4, L6, L1, R2, L3, L2,
L2, R2, L2`;

// const dataString = `L2, L2, L2`;

// const dataString = `R5, L5, R5, R3​`;

// const dataString = `R2, L3​, L4`;

export const data: DataType = dataString
  .replace(/\s/g, "")
  .split(",")
  .map((el) => {
    const key = el.substring(0, 1);
    const value: number = parseInt(el.substring(1), 10);
    if (key === "L" || key === "R") {
      return [key as DirKeys, value];
    }
    throw new Error(`each direction has to start with "R" or "L".`);
  });
