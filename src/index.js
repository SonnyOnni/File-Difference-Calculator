/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import _ from 'lodash';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import parserForFormats from './parsers.js';
import formatter from './formatters/formatter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const buildTree = (data1, data2) => {
  const keys = Object.keys({ ...data1, ...data2 });
  const sortedKeys = _.sortBy(keys);

  return sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (!_.has(data1, key)) {
      return { type: 'added', key, val: value2 };
    }
    if (!_.has(data2, key)) {
      return { type: 'removed', key, val: value1 };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { type: 'recursion', key, children: buildTree(value1, value2) };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        type: 'changed', key, val1: value1, val2: value2,
      };
    }
    return { type: 'unchanged', key, val: value1 };
  });
};

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
