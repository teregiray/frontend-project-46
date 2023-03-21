import _ from "lodash"
const getSortedUnionKeys = (obj1, obj2) => _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
const buildDiff = (data1, data2) => {
  const sortedKeys = getSortedUnionKeys(obj1, obj2);
  const diff = sortedKeys.map((key) => {
    if(!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if(!_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }
    if(_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, type: 'nested', children: buildDiff(data1[key], data2[key])}
    }
    if(!_.isEqual(data1[key], data2[key])) {
      return { key, type: 'changed', value: data1[key], value: data2[key] };
    }
    if(!_.isEqual(data1[key], data2[key])) {
      return { key, type: 'unchanged', value: data2[key] };
    }
    });
    return diff;
}

export default  (data1, data2) => ({
    type: "root",
    children: buildDiff(data1, data2)
});