/* eslint-disable import/extensions */
import stylish from './stylish.js';
import plain from './plain.js';

export default (data, format) => {
  if (format === 'stylish') {
    return stylish(data);
  }
  if (format === 'plain') {
    return plain(data);
  }
  return 'Uncorect format';
};
