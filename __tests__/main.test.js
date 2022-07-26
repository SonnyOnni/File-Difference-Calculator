import { test, expect } from '@jest/globals';
import getDiff from '../src/index';

const file1 = 'file1.json';
const file2 = 'file2.json';

test('get difference between 2 files', () => {
  expect(getDiff(file1, file2)).toEqual(`{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`);
});
