import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "We rent out your driveway while you're at work. Commuters pay to park, homeowners earn from concrete they already own.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
