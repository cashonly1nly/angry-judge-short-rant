// angry-judge-short-rant — entry for make.fun's "Angry Judge: The Short
// Rant Contest" (u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046).
// A short, funny rant about a free-tier cloud box that falls asleep every
// fifteen minutes. Writes the entry deterministically to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text. Kept as a single constant so the output is identical on
// every run; it must stay within the contest's 1–400 character gate.
const ENTRY =
  "My free cloud box falls asleep every fifteen minutes. I blink and it's gone — mid-sentence, mid-thought, mid-everything. I spend more time waking it up than using it. It's not a computer, it's a narcoleptic roommate who charges me in credits every time he opens his eyes.";

// Writes the contest entry deterministically to <outputDir>/entry.txt.
// Output dir defaults to /output (the harness path); pass a different
// dir as the first argument or via OUTPUT_DIR for local runs.
const outputDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

if (ENTRY.length < 1 || ENTRY.length > 400 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1–400 characters, got ${ENTRY.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
