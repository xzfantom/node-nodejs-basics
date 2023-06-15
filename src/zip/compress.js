// implement function that compresses file fileToCompress.txt to archive.gz
// using zlib and Streams API

import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToCompress = join(__dirname, "files", "fileToCompress.txt");
const compressedFile = join(__dirname, "files", "archive.gz");

const compress = async () => {
    const gzip = createGzip();
    const input = createReadStream(fileToCompress);
    const output = createWriteStream(compressedFile);
    pipeline(input, gzip, output, (err) => {
        if (err) {
            throw err;
        }
    });
};

await compress();