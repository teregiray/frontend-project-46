#!/usr/bin/env node
//  import gendiffLogick from "../src/gendiffLogick.js"

const { Command } = require('commander');
const program = new Command();

program
  .usage("[options]")
  .name('gendiff')
  .version('0.8.0')
  .description('Compares two configuration files and shows a difference.')
//   .action((file1,file2) => {
//     gendiffLogick(file1,file2)
//   })
 program.command('gendiff')
  


program.parse();


