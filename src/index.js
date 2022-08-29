import path from 'path';
import fs from 'fs';
import { cwd } from 'process';
import parserForFormats from './parsers.js';
import formatter from './formatters/index.js';
import buildTree from './buildTree.js';

const getFixturePath = (filename) => path.resolve(cwd(), filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const getDiff = (file1, file2, format = 'stylish') => {
  const getFile1Format = file1.split('.');
  const getFile2Format = file2.split('.');

  const objFile1 = readFile(file1);
  const objFile2 = readFile(file2);

  const getParsedFile1 = parserForFormats(objFile1, getFile1Format[1]);
  const getParsedFile2 = parserForFormats(objFile2, getFile2Format[1]);

  const diffTree = buildTree(getParsedFile1, getParsedFile2);
  const formatedTree = formatter(diffTree, format);

  return formatedTree;
};

export default getDiff;
