// implement function that calculates SHA256 hash for file
// fileToCalculateHashFor.txt and logs it into console as hex

import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const filepath = "./files/fileToCalculateHashFor.txt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const hash = createHash("sha256");
  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString("hex"));
    }
  });

  const stream = await readFile(join(__dirname, filepath));
  hash.write(stream);
  hash.end();
};

await calculateHash();
