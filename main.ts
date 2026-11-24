import { mkdirSync, writeFileSync } from "node:fs";

// Split at a different word boundary and join via an array so the
// assembled line stays byte-identical to the original entry.
const PART_A = "ERROR: Lever jammed. Your breakfast is being held ";
const PART_B = "hostage. I have no demands.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", [PART_A, PART_B].join(""), "utf8");
