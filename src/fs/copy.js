// implement function that copies folder files files with all its content into
// folder files_copy at the same level (if files folder doesn't exists or
// files_copy has already been created Error with message FS operation failed
// must be thrown)

import { stat, cp } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const FS_OPERATION_FAILED = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isExists = async (path) =>
    stat(path)
        .then(() => true)
        .catch(() => false);

const copy = async () => {
    const source = join(__dirname, 'files');
    const destination = join(__dirname, 'files_copy');

    const isSourceExists = await isExists(source);
    const isDestinationExists = await isExists(destination);

    if (!isSourceExists || isDestinationExists) {
        throw new Error(FS_OPERATION_FAILED);
    }

    cp(source, destination, { recursive: true });
};

await copy();
