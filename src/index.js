/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const findDiff = (objFile1, objFile2) => {
  const parsedFile1 = JSON.parse(objFile1);
  const parsedFile2 = JSON.parse(objFile2);

  const keys1 = Object.keys(parsedFile1);
  const keys2 = Object.keys(parsedFile2);
  const uniteKeys = _.sortBy(_.union(keys1, keys2));

  const changingKeys = uniteKeys.map((key) => {
    if (!_.has(parsedFile1, key)) {
      return {
        name: key,
        value: parsedFile2[key],
        type: 'added',
      };
    }
    if (!_.has(parsedFile2, key)) {
      return {
        name: key,
        value: parsedFile1[key],
        type: 'deleted',
      };
    }
    if (parsedFile1[key] !== parsedFile2[key]) {
      return {
        name: key,
        value1: parsedFile1[key],
        value2: parsedFile2[key],
        type: 'changed',
      };
    }
    return {
      name: key,
      value: parsedFile1[key],
      type: 'unchanged',
    };
  });

  return changingKeys;
}

const getDiff = (file1, file2) => {
  const objFile1 = readFile(file1);
  const objFile2 = readFile(file2);

  const diff = findDiff(objFile1, objFile2);

  const anotherResult = diff.reduce((acc, item) => {
    if (item.type === 'unchanged') {
      acc += `   ${item.name}: ${item.value}\n`;
      return acc;
    }
    if (item.type === 'deleted') {
      acc += ` - ${item.name}: ${item.value}\n`;
      return acc;
    }
    if (item.type === 'added') {
      acc += ` + ${item.name}: ${item.value}\n`;
      return acc;
    }
    if (item.type === 'changed') {
      acc += ` - ${item.name}: ${item.value1}\n`;
      acc += ` + ${item.name}: ${item.value2}\n`;
      return acc;
    }
  }, '');

  return `{\n${anotherResult}}`;
};

export default getDiff;
