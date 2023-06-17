// implement function that reads data from process.stdin, reverses text using
// Transform Stream and then writes it into process.stdout

import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        }
    });

    stdin.pipe(transformStream).pipe(stdout);
};

await transform();