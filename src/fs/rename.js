// implement function that renames file wrongFilename.txt to properFilename
// with extension .md (if there's no file wrongFilename.txt or properFilename.md
// already exists Error with message FS operation failed must be thrown)

import fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const FS_OPERATION_FAILED = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isExists = async (path) =>
  fs
    .stat(path)
    .then(() => true)
    .catch(() => false);

const rename = async () => {
  const source = join(__dirname, 'files', 'wrongFilename.txt');
  const destination = join(__dirname, 'files', 'properFilename.md');

  const isSourceExists = await isExists(source);
  const isDestinationExists = await isExists(destination);

  if (!isSourceExists || isDestinationExists) {
    throw new Error(FS_OPERATION_FAILED);
  }

  fs.rename(source, destination);
};

await rename();
