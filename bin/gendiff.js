#!/usr/bin/env node

import { Command } from 'commander';

import genDiff from '../src/gendiffLogick.js'

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2,) => {
    const options = program.opts();
    console.log(genDiff(filepath1, filepath2, options.format));
  });

program.parse(process.argv);
