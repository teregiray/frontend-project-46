#!/usr/bin/env node

const file1Path = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
  }

const file2Path = {
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io"
}  

const fs = require('fs');

function genDiff(file1Path, file2Path) {

    const data1 = JSON.parse(fs.readFileSync(file1Path, 'utf-8'));
    const data2 = JSON.parse(fs.readFileSync(file2Path, 'utf-8'));
    const keys = new Set([...Object.keys(data1), ...Object.keys(data2)]);
    const diff = [];
    for (const key of [...keys].sort()) {
        if (!(key in data1)) {

            diff.push(`+ ${key}: ${data2[key]}`);

            }   else if (!(key in data2)) {

                    diff.push(`- ${key}: ${data1[key]}`);

            }   else if (data1[key] !== data2[key]) {

                    diff.push(`- ${key}: ${data1[key]}`);

                    diff.push(`+ ${key}: ${data2[key]}`);

}

}

return diff.join('\n');

};
const result = genDiff(file1Path, file2Path);
console.log(result)
