// implement function that copies folder files files with all its content into 
// folder files_copy at the same level (if files folder doesn't exists or 
// files_copy has already been created Error with message FS operation failed 
// must be thrown)

import {stat, cp} from 'fs/promises';
import {dirname, join} from 'path';

const FS_OPERATION_FAILED = "FS operation failed";

const isExists = async (path) => 
    stat(path)
        .then(() => true)
        .catch(() => false)

const copy = async () => {
    const basePath = dirname(process.argv[1]);
    const source = join(basePath, "files");
    const destination = join(basePath, "files_copy");

    const isSourceExists = await isExists(source);
    const isDestinationExists = await isExists(destination);

    if (!isSourceExists || isDestinationExists) {
        throw new Error(FS_OPERATION_FAILED);
    }

    cp(source, destination, { recursive: true })     
};

await copy();
