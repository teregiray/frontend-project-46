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


