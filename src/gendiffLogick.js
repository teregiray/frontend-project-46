#!/usr/bin/env node

import { readFileSync } from "fs";

import _ from "lodash";
 
const genDiff = (data1, data2) => {
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
        result[`${''}  ${key}`] = data1[key]; 
      } else if (data1[key] !== data2[key]) {
        console.log('data1[key]:', data1[key])
        console.log('data2[key]:', data2[key])
        result[`${'-'}  ${key}`] = data1[key];
        result[`${'+'}  ${key}`] = data2[key];
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
   
    
    // if (value1 === value2) result[`  ${key}`] = value1;
    // if (keys1.includes(key) && !keys2.includes(key)) result[`- ${key}`] = value1;
    // if (!keys1.includes(key) && keys2.includes(key)) result[`+ ${key}`] = value2;
    // if (keys1.includes(key) && keys2.includes(key) && value1 !== value2) {
    //   result[`- ${key}`] = value1;
    //   result[`+ ${key}`] = value2;
    // }