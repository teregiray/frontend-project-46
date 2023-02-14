#!/usr/bin/env node

const { Command } = require('commander');

const program = new Command();

// import gendiff from '../src/gendiffLogick.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format, <type>', 'output format')
  // .arguments('<filepath1> <filepath2>')
  // .action((path1, path2) =>
  //   console.log(gendiff(path1, path2)))

  program.command("gendiff")

  program.parse();