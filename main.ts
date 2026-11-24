import { mkdirSync, writeFileSync } from "node:fs";

// Two lines to your past self: a warning about one specific moment,
// and one sentence on why it mattered.
const lines = [
  "Don't ship the Friday 6 p.m. hotfix before the rollback script is ready — the deploy you can't undo will page you at 3 a.m.",
  "That night taught me a deploy without a way back is a gamble, and I have never shipped one since.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
