#!/usr/bin/env node

import { readFileSync } from "fs";

import _ from "lodash";
 
const genDiff = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2); 
  
    const result = {};
    for (const key of keys) {
      if (!Object.hasOwn(data1, key)) {
        result[key] = 'added';
      } else if (!Object.hasOwn(data2, key)) {
        result[key] = 'deleted';
      } else if (data1[key] !== data2[key]) {
        result[key] = 'changed';
      } else {
        result[key] = 'unchanged';
      }
    }
  
    return result;
  };
  export default function (filepath1, filepath2) {
    const file1 = readFileSync(filepath1, "utf-8");
    const file2 = readFileSync(filepath2, "utf-8");
    const parseFile1 = JSON.parse(file1);
    const parseFile2 = JSON.parse(file2);
    console.log(genDiff(parseFile1,parseFile2))
    };