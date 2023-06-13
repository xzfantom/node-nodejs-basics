// implement function that creates new file fresh.txt with content I am fresh
// and young inside of the files folder (if file already exists Error with 
// message FS operation failed must be thrown)

import {stat, writeFile} from 'fs/promises';
import {dirname, join} from 'path';

const FS_OPERATION_FAILED = "FS operation failed";
const FILE_CONTENT = "I am fresh and young";

const isExists = async (path) =>
    stat(path)
        .then(() => true)
        .catch(() => false)
        
const create = async () => {
    const basePath = dirname(process.argv[1]);
    const destination = join(basePath, "files", "fresh.txt");

    const isDestinationExists = await isExists(destination);

    if (isDestinationExists) {
        throw new Error(FS_OPERATION_FAILED);
    }

    writeFile(destination, FILE_CONTENT);
};

await create();