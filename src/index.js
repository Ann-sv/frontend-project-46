import * as fs from 'node:fs';
import path from 'node:path';

function getFileExt(filepath) {
  return path.extname(filepath).slice(1);
}
const makePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(makePath(filepath), 'utf8');

const getData = (filepath) => {
  const extension = getFileExt(filepath);
  const content = readFile(filepath);
  const data = JSON.parse(content);
  return data;
};

const calculateDiff = (data1, data2) =>{
  let entries1 = Object.entries(data1);
  let entries2 = Object.entries(data2);
  console.log(entries2);
}

const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const differenceTree = calculateDiff(data1, data2);
  const result = JSON.stringify(differenceTree);

  return result;
};

export default genDiff;



