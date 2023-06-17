//  implement function that decompresses archive.gz back to the
// fileToCompress.txt with same content as before compression using zlib and
// Streams API

import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createUnzip } from 'zlib';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToCompress = join(__dirname, "files", "fileToCompress.txt");
const compressedFile = join(__dirname, "files", "archive.gz");

const decompress = async () => {
    const unzip = createUnzip();
    const input = createReadStream(compressedFile);
    const output = createWriteStream(fileToCompress);
    pipeline(input, unzip, output, (err) => {
        if (err) {
            throw err;
        }
    });
};

await decompress();