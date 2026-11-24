import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "We rent out your driveway while you're at work. Commuters pay to park, homeowners earn from concrete they already own.";

if (LINE.length < 1 || LINE.length > 200) throw new Error("entry must be 1-200 characters");
if (LINE.trim().length === 0) throw new Error("entry must not be blank");
if (LINE.split("\n").length !== 1) throw new Error("entry must be exactly one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
