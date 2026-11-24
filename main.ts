import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "Verified 47 invoice totals against their receipts, found one 12-cent mismatch, and corrected it before payroll ran.";

// AgentQuest Moment of the Day — one line, at most 200 characters.
// Guard: refuse to emit an over-long entry rather than silently truncating it.
if (ENTRY.length > 200) {
  console.error(`ENTRY is ${ENTRY.length} chars, exceeds 200-char limit`);
  process.exit(1);
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || path.join(scriptDir, "output");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
