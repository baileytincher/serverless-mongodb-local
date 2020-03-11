import { spawn } from 'child_process';

const pipe = null;

export const start = (dbpath, port) => {
  pipe = spawn('mongod', [`--dbpath=${dbpath}`, '--port', port]);

  pipe.stdout.on('data', (data) => {
    console.log(data.toString('utf8'));
  });

  pipe.stderr.on('data', (data) => {
    console.error(data.toString('utf8'));
  });

  pipe.on('close', (code) => {
    console.log('MongoDB server exited with code:', code);
  });
};

export const close = () => {
  if (pipe) {
    pipe.kill();
  }
};
