#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import getDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(getDiff(filepath1, filepath2));
  });

program.parse();