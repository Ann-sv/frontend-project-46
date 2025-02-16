// это пользователь скрипта
// import { fileURLToPath } from 'url';
// import path from 'node:path';
// import fs from 'fs';
import genDiff from '../index.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('genDiff', () => {
  const result = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');

  it('result is empty string if there are no differences', () => {
    expect(result).toBeUndefined();
  });
});

// const data = [
//   {
//     name: 'JSON',
//     file1: 'file1.json',
//     file2: 'file2.json',
//     format: 'stylish',
//     txt: 'stylish.text.txt',
//   },
// ];

// data.forEach(({
//   name, file1, file2, format, txt,
// }) => test(`${name}`, () => {
//   expect(
//     genDiff(getFixturePath(file1), getFixturePath(file2), format),
//   ).toEqual(fs.readFileSync(getFixturePath(txt), 'utf-8'));
// }));
