/* eslint-disable require-jsdoc */
import defaultOptions from 'src/options';
import { start, close } from 'src/server';

class MongoDBLocal {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = { ...defaultOptions, ...options };

    this.commands = {};

    this.hooks = {
      'before:offline:start:init': this.startHandler.bind(this),
      'before:offline:start:end': this.endHandler.bind(this)
    };
  }

  startHandler() {
    this.serverless.cli.log('Starting MongoDB Local!');
    start();
  }

  endHandler() {
    this.serverless.cli.log('Closing MongoDB Local!');
    close();
  }
}

export default MongoDBLocal;
