// implement function that deletes file fileToRemove.txt (if there's no file 
// fileToRemove.txt Error with message FS operation failed must be thrown)

import {rm} from 'fs/promises';
import {dirname, join} from 'path';

const FS_OPERATION_FAILED = "FS operation failed";

const remove = async () => {
    const basePath = dirname(process.argv[1]);
    const fileToRemove = join(basePath, "files", "fileToRemove.txt");

    try {
        await rm(fileToRemove);
    } catch (error) {
         if (error.code === "ENOENT") {
            throw new Error(FS_OPERATION_FAILED);
        }
        throw error;
    }
};

await remove();