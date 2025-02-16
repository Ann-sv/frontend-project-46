import * as fs from 'node:fs';
import path from 'node:path';
import parsers from './parsers.js';
import buildTree from './treeBuilder.js';
import defineFormatter from './formatters/index.js';

// скрипт, который экспортируется
const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parsers(fs.readFileSync(filepath, ('utf-8')), extractFormat(filepath));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);

  const tree = buildTree(data1, data2);
  return defineFormatter(tree, formatName);
};

export default genDiff;
