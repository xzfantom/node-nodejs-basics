// implement function that writes process.stdin data into file fileToWrite.txt
// content using Writable Stream

import { stdin } from 'process';
import { createWriteStream } from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToWrite = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
    const writable = createWriteStream(fileToWrite);
    stdin.on('data', (chunk) => {
        writable.write(chunk);
    }
    );
};

await write();