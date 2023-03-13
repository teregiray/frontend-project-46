#!/usr/bin/env node

import  parser  from "./parsers.js";
import { stringify, plainDiff } from "./helper.js";

  

  export default function genDiff (filepath1, filepath2) {
    const parseFile1 = parser(filepath1);
    const parseFile2 = parser(filepath2);
    return stringify(plainDiff(parseFile1,parseFile2))
    }