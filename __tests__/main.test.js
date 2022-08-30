import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import getDiff from '../src/index';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const extensions = ['json', 'yml'];

test.each(extensions)('get difference between 2 files', (extension) => {
  const file1 = `file1.${extension}`;
  const file2 = `file2.${extension}`;

  expect(getDiff(getFixturePath(file1), getFixturePath(file2), 'stylish')).toEqual(readFile('correct-stylish.txt'));
  expect(getDiff(getFixturePath(file1), getFixturePath(file2), 'plain')).toEqual(readFile('correct-plain.txt'));
  expect(getDiff(getFixturePath(file1), getFixturePath(file2), 'json')).toEqual(readFile('correct-json.txt'));
});
