#!/bin/bash node
import { Command } from 'commander/esm.mjs';
import getDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, { format }) => {
    console.log(getDiff(filepath1, filepath2, format));
  });

program.parse();
