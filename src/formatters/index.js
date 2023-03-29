import renderNested from './stylish.js';
import renderPlain from './plain.js';

const formatters = {
  stylish: renderNested,
  plain: renderPlain,
  json: JSON.stringify,
};

export default (ast, type) => {
  const format = formatters[type];
  if (!format) {
    throw new Error(`Unknown format ${type}`);
  }
  return format(ast);
};
