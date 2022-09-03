import formatStylish from './stylish.js';
import formatPlain from './plain.js';

export default (data, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(data);
    case 'plain':
      return formatPlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error('Uncorect format');
  }
};
