import renderTree from './stylish.js'; 
const formatters = {
  stylish: renderTree,
  plain: '',
  json: JSON.stringify
};

export default (ast, type) => {
  const format = formatters[type];
  if(!format) {
    throw new Error(`Unknown format ${type}`);
  }
  return format(ast);
}