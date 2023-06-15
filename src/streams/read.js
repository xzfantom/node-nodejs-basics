// implement function that reads file fileToRead.txt content using Readable
// Stream and prints it's content into process.stdout


import { stdout } from 'process';
import { createReadStream } from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToRead = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    const readable = createReadStream(fileToRead);

    readable.on('data', (chunk) => {
        stdout.write(chunk);
    });

    readable.on('error', (err) => {
        throw err;
    });
};

await read();