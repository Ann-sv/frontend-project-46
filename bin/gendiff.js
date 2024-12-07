#!/usr/bin/env node
//пользователь скрипта
import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.1')
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {

        genDiff(filepath1, filepath2, program.opts().format);

  });
program.parse();

// program.parse();
// genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')
