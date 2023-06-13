//  implement function that prints content of the fileToRead.txt into console
// (if there's no file fileToRead.txt Error with message FS operation failed
// must be thrown)

import {readFile} from 'fs/promises';
import {dirname, join} from 'path';

const FS_OPERATION_FAILED = "FS operation failed";

const read = async () => {
    const basePath = dirname(process.argv[1]);
    const fileToRead = join(basePath, "files", "fileToRead.txt");

    try {
        const content = await readFile(fileToRead, "utf-8");
        console.log(content);
    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error(FS_OPERATION_FAILED);
        }
        throw error;
    }
};

await read();