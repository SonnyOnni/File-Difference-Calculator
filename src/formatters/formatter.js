/* eslint-disable import/extensions */
import stylish from './stylish.js';

export default (data, format) => {
  if (format === 'stylish') {
    return stylish(data);
  }
  return 'Uncorect format';
};
