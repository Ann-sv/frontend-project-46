import * as fs from 'node:fs';
import path from 'node:path';
import parsers from './parsers.js';
import buildTree from './treeBuilder.js';

// скрипт, который экспортируется
const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parsers(fs.readFileSync(filepath, ('utf-8')), extractFormat(filepath));

const calculateDiff = (tree) => {
  const result = [];

  tree.forEach((item) => {
    const {
      key, value, value1, value2, type,
    } = item;

    // проверяем тип изменения и формируем строку
    if (type === 'changed') {
      result.push(`- ${key}: ${value1}`);
      result.push(`+ ${key}: ${value2}`);
    } else if (type === 'added') {
      result.push(`+ ${key}: ${value}`);
    } else if (type === 'deleted') {
      result.push(`- ${key}: ${value}`);
    } else {
      result.push(`${key}: ${value}`);
    }
  });

  // возвращаем строку с фигурными скобками и переносами строк
  return `{\n${result.join('\n')}\n}`;
};

const genDiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);

  const tree = buildTree(data1, data2);
  console.log(calculateDiff(tree));
  // console.log(data2);
  // console.log(tree);

  // format(tree, formatname);
};

export default genDiff;

// const genDiff = (filepath1, filepath2) => {
//   const data1 = getData(filepath1);
//   const data2 = getData(filepath2);

//   const differenceTree = calculateDiff(data1, data2);
//   const result = JSON.stringify(differenceTree);

//   return result;
// };

// export default genDiff;

// // const genDiff =(fP1, fP2) => {

// // }

// function getFileExt(filepath) {
//   return path.extname(filepath).slice(1);
// }

// const readFile = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf8');

// const getData = (filepath) => {
//   const extension = getFileExt(filepath);
//   const content = readFile(filepath);
//   const data = JSON.parse(content);
//   return data;
// };

// const calculateDiff = (data1, data2) =>{
//   let entries1 = Object.entries(data1);
//   let entries2 = Object.entries(data2);

//   console.log(entries2);
// }

// const genDiff = (data1, data2) => {
//   const keys1 = Object.keys(data1);
//   const keys2 = Object.keys(data2);
//   const keys = _.union(keys1, keys2); // https://youtu.be/vkUTX1hruF8?t=929

//   const result = {};
//   for (const key of keys) {
//     if (!Object.hasOwn(data1, key)) {
//       result[key] = 'added';
//     } else if (!Object.hasOwn(data2, key)) {
//       result[key] = 'deleted';
//     } else if (data1[key] !== data2[key]) {
//       result[key] = 'changed';
//     } else {
//       result[key] = 'unchanged';
//     }
//   }
// }
