// implement function spawnChildProcess that receives array of arguments args
// and creates child process from file script.js, passing these args to it.
// This function should create IPC-channel between stdin and stdout of master
// process and child process:
//  child process stdin should receive input from master process stdin
//  child process stdout should send data to master process stdout

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (...args) => {
    const childProcess = spawn('node', [join(__dirname, 'files', 'script.js'), ...args]);

    childProcess.stdout.pipe(process.stdout);
    process.stdin.pipe(childProcess.stdin);

};

// Put your arguments in function call to test this functionality
spawnChildProcess('Hello from master process', 'how are you?');
