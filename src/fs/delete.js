// implement function that deletes file fileToRemove.txt (if there's no file
// fileToRemove.txt Error with message FS operation failed must be thrown)

import { rm } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const FS_OPERATION_FAILED = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const fileToRemove = join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(fileToRemove);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(FS_OPERATION_FAILED);
    }
    throw error;
  }
};

await remove();
