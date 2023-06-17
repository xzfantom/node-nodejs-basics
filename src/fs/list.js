// implement function that prints all array of filenames from files folder into
// console (if files folder doesn't exists Error with message FS operation
// failed must be thrown)

import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const FS_OPERATION_FAILED = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const source = join(__dirname, 'files');

  try {
    const files = await readdir(source);

    files.forEach((item) => console.log(item));
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(FS_OPERATION_FAILED);
    }
    throw error;
  }
};

await list();
