#!/usr/bin/env node

import  parser  from "./parsers.js";
import { stringify, diffNested } from "./helper.js";
  

  export default function genDiff (filepath1, filepath2, option) {
    if(option !== "stylish") {
      return "Error, this style is not available, choose another one"
    }
    const parseFile1 = parser(filepath1);
    const parseFile2 = parser(filepath2);
    return stringify(diffNested(parseFile1,parseFile2))
    }