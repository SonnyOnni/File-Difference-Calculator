import { test, expect } from '@jest/globals';
import getDiff from '../src/index';

const fileJson1 = 'file1.json';
const fileJson2 = 'file2.json';

const fileYaml1 = 'file1.yaml';
const fileYaml2 = 'file2.yaml';

test('get difference between 2 files', () => {
  expect(getDiff(fileJson1, fileJson2)).toEqual(`{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`);
  expect(getDiff(fileYaml1, fileYaml2)).toEqual(`{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`);
});
