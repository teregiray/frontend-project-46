import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './builderTree.js';
import format from './formatters/index.js';

const buildPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), extractFormat(filepath));

const genDiff = (path1, path2, formatName = 'stylish') => {
  const data1 = getData(buildPath(path1));
  const data2 = getData(buildPath(path2));

  const tree = buildTree(data1, data2);
  return format(tree, formatName);
};
export default genDiff;
