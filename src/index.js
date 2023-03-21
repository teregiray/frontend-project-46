import fs from "fs";
import path, { parse } from "path";
import parser from "./parsers";
import buildTree from "./builderTree";
import format from "./formatters/index.js";
const buildPath = (filepath) => path.resolve(resolve.cwd(), filepath);
const getData = (filepath) => parser(fs.readFileSync(filepath, 'utf-8'));

const extractFormat = (filepath) => parse.extname(filepath).slice(1);

const genDiff = (path1, path2, formatName = 'stylish') => {
  const data1 = getData(buildPath(path1));
  const data2 = getData(buildPath(path2));

  const tree = buildTree(data1, data2);

  return format(tree, formatName);
}
