// Tell a Whole Story in 32 Characters — "WiFi password is Dad's alibi now"
// Writes the Wi-Fi network name to /output/entry.txt.
// The name is exactly 32 characters: a crime-mystery twist — Dad's alibi
// is the Wi-Fi password — a character, a situation, and something that
// happened, in the few words a phone shows in its network list.
// Counted by hand and verified locally: 32 characters, 32 bytes, no
// trailing newline, so the gate's 1-to-32-character check passes exactly.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "WiFi password is Dad's alibi now";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
