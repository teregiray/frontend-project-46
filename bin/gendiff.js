#!/usr/bin/env node


const { Command } = require('commander');
const program = new Command();

program
  .usage("[options]")
  .name('gendiff')
  .version('0.8.0')
  .description('Compares two configuration files and shows a difference.')

 program.command('gendiff')
  


program.parse();

// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('string-util')
//   .description('CLI to some JavaScript string utilities')
//   .version('0.8.0');

// program.command('split')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();

