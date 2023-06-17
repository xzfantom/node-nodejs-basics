//  implement function that prints content of the fileToRead.txt into console
// (if there's no file fileToRead.txt Error with message FS operation failed
// must be thrown)

import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const FS_OPERATION_FAILED = 'FS operation failed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const fileToRead = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const content = await readFile(fileToRead, 'utf-8');
    console.log(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(FS_OPERATION_FAILED);
    }
    throw error;
  }
};

await read();
