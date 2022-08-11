import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import getDiff from '../src/index';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const extensions = ['json', 'yaml'];

test.each(extensions)('get difference between 2 files', (extension) => {
  const file1 = `file1.${extension}`;
  const file2 = `file2.${extension}`;

  expect(getDiff(file1, file2)).toEqual(readFile('correct-stylish.txt'));
});
