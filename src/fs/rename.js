// implement function that renames file wrongFilename.txt to properFilename
// with extension .md (if there's no file wrongFilename.txt or properFilename.md
// already exists Error with message FS operation failed must be thrown)

import fs from 'fs/promises';
import {dirname, join} from 'path';

const FS_OPERATION_FAILED = "FS operation failed";

const isExists = async (path) =>
    fs.stat(path)
        .then(() => true)
        .catch(() => false)
        
const rename = async () => {
    const basePath = dirname(process.argv[1]);
    const source = join(basePath, "files", "wrongFilename.txt");
    const destination = join(basePath, "files", "properFilename.md");

    const isSourceExists = await isExists(source);
    const isDestinationExists = await isExists(destination);

    if (!isSourceExists || isDestinationExists) {
        throw new Error(FS_OPERATION_FAILED);
    }

    fs.rename(source, destination);
};

await rename();