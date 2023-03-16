import _ from "lodash";

const getSortedUnionKeys = (obj1, obj2) => _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

export const plainDiff = (data1, data2) => {
  const sortedKeys = getSortedUnionKeys(data1, data2);
  const result = sortedKeys.reduce((acc, key) => {
    if (!Object.hasOwn(data1, key)) {
      return { ...acc, [`${'+'}  ${key}`]: data2[key] };
    } else if (!Object.hasOwn(data2, key)) {
      return { ...acc, [`${'-'}  ${key}`]: data1[key] };
    } else if (data1[key] === data2[key]) {
      return { ...acc, [`${' '}  ${key}`]: data1[key] };
    } else if (data1[key] !== data2[key]) {
      return {
        ...acc,
        [`${'-'}  ${key}`]: data1[key],
        [`${'+'}  ${key}`]: data2[key],
      };
    }
    return acc;
  }, {});
  return result;
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
  export const diffNested = (data1, data2) => {
    const iter = (obj1, obj2, depth = 1) => {
      const indentSize = 4;
      const sortedKeys = getSortedUnionKeys(obj1, obj2);
      return sortedKeys.reduce((acc, key) => {
        const val1 = obj1[key];
        const val2 = obj2[key];
        if (_.isObject(val1) && _.isObject(val2)) {
          const nestedDiff = iter(val1, val2, depth + 1);
          if (_.isEmpty(nestedDiff)) {
            return acc;
          }
          return { ...acc, [`${' '.repeat((depth - 1) * indentSize)}${key}`]: nestedDiff };
        }
        if (!Object.hasOwn(obj1, key)) {
          return { ...acc, [`${' '.repeat((depth - 1) * indentSize)}${'+'} ${key}`]: val2 };
        }
        if (!Object.hasOwn(obj2, key)) {
          return { ...acc, [`${' '.repeat((depth - 1) * indentSize)}${'-'} ${key}`]: val1 };
        }
        if (!_.isEqual(val1, val2)) {
          return {
            ...acc,
            [`${' '.repeat((depth - 1) * indentSize)}${'-'} ${key}`]: val1,
            [`${' '.repeat((depth - 1) * indentSize)}${'+'} ${key}`]: val2,
          };
        }
        return acc;
      }, {});
    };
    return iter(data1, data2);
    
  };
 
