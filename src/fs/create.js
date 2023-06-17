// implement function that creates new file fresh.txt with content I am fresh
// and young inside of the files folder (if file already exists Error with
// message FS operation failed must be thrown)

import { stat, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const FS_OPERATION_FAILED = 'FS operation failed';
const FILE_CONTENT = 'I am fresh and young';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isExists = async (path) =>
  stat(path)
    .then(() => true)
    .catch(() => false);

const create = async () => {
  const destination = join(__dirname, 'files', 'fresh.txt');

  const isDestinationExists = await isExists(destination);

  if (isDestinationExists) {
    throw new Error(FS_OPERATION_FAILED);
  }

  writeFile(destination, FILE_CONTENT);
};

await create();
