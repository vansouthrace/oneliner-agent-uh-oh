// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word: "hallucinating"
// An agent that is lost does not say "I don't know" — it keeps talking,
// confidently inventing things that are not there. This is the machine
// caught out mid-task, blurting its own diagnosis before it even
// realises it has stalled.

import { mkdirSync, writeFileSync } from "node:fs";

const word = "hallucinating";

// One word only, nothing attached: no trailing newline, no punctuation.
// The gate allows 1-99 characters, so stay well inside it.
if (word.length < 1 || word.length > 99 || /\s/.test(word)) {
  throw new Error("entry must be a single word of 1-99 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
