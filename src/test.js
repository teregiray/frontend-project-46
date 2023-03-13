import _ from "lodash";

const stringify = (value, replacer = ' ', spacesCount = 4) => {
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


const plainDiff = (data1, data2) => {

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
  
    return result;
  };
const data1 = {
    "common": {
      "setting1": "Value 1",
      "setting2": 200,
      "setting3": true,
      "setting6": {
        "key": "value",
        "doge": {
          "wow": ""
        }
      }
    },
    "group1": {
      "baz": "bas",
      "foo": "bar",
      "nest": {
        "key": "value"
      }
    },
    "group2": {
      "abc": 12345,
      "deep": {
        "id": 45
      }
    }
  }
const data2 = {
    "common": {
      "follow": false,
      "setting1": "Value 1",
      "setting3": null,
      "setting4": "blah blah",
      "setting5": {
        "key5": "value5"
      },
      "setting6": {
        "key": "value",
        "ops": "vops",
        "doge": {
          "wow": "so much"
        }
      }
    },
    "group1": {
      "foo": "bar",
      "baz": "bars",
      "nest": "str"
    },
    "group3": {
      "deep": {
        "id": {
          "number": 45
        }
      },
      "fee": 100500
    }
  }
console.log(stringify(diffVerser(data1, data2))); 