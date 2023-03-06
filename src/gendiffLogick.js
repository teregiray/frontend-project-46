#!/usr/bin/env node

import _ from "lodash";

import  parser  from "./parsers.js";
 
const diffVerser = (data1, data2) => {

    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const unionKeys = _.union(keys1, keys2); 
    const sortedKeys = _.sortBy(unionKeys)
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

  export const stringify = (value, replacer = ' ', spacesCount = 1) => {
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
    const parseFile1 = parser(filepath1);
    const parseFile2 = parser(filepath2);
    return stringify(diffVerser(parseFile1,parseFile2))
    }
