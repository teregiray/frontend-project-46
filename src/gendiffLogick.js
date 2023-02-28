#!/usr/bin/env node

import { readFileSync } from "fs";

import _ from "lodash";
 
const diffVerser = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const unionKeys = _.union(keys1, keys2); 
    const sortedKeys = _.sortBy((unionKeys), key => key);
    const result = {};
    for (const key of sortedKeys) {
      if (!Object.hasOwn(data1, key)) {
        result[`${'+'}  ${key}`] = data2[key];
      } else if (!Object.hasOwn(data2, key)) {
        result[`${'-'}  ${key}`] = data1[key];
      } else if (data1[key] === data2[key]) {
        result[`${' '}  ${key}`] = data1[key]; 
      } else if (data1[key] !== data2[key]) {
        result[`${'-'}  ${key}`] = data1[key];
        result[`${'+'}  ${key}`] = data2[key];
      } 
    }
  
    return result
  };

  const stringify = (value, replacer = ' ', spacesCount = 1) => {
    const iter = (currentValue, depth) => {
      if (typeof currentValue !== 'object' || currentValue === null) {
        return `${currentValue}`;
      }
  
      const indentSize = depth * spacesCount;
      const currentIndent = replacer.repeat(indentSize);
      const bracketIndent = replacer.repeat(indentSize - spacesCount);
      const lines = Object.entries(currentValue).map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);
  
      return [
        '{',
        ...lines,
        `${bracketIndent}}`,  
      ].join('\n');
    };
  
    return iter(value, 1);
  };

  export default function genDiff (filepath1, filepath2) {
    const file1 = readFileSync(filepath1, "utf-8");
    const file2 = readFileSync(filepath2, "utf-8");
    const parseFile1 = JSON.parse(file1);
    const parseFile2 = JSON.parse(file2);
    console.log(stringify(diffVerser(parseFile1,parseFile2)))
    }

  // module.exports = genDiff;
