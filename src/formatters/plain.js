import _ from 'lodash';

const stringify = (currentValue) => {
  if (!_.isObject(currentValue)) {
    if (typeof currentValue === 'string') {
      return `'${currentValue}'`;
    }
    return `${currentValue}`;
  }

  return '[complex value]';
};

const formatPlain = (buildTree) => {
  const iter = (tree, currentKey = '') => tree.map((node) => {
    const depthKey = `${currentKey}.${node.key}`;

    switch (node.type) {
      case 'added':
        return `Property '${depthKey.slice(1)}' was added with value: ${stringify(node.val)}\n`;
      case 'removed':
        return `Property '${depthKey.slice(1)}' was removed\n`;
      case 'unchanged':
        return '';
      case 'changed':
        return `Property '${depthKey.slice(1)}' was updated. From ${stringify(node.val1)} to ${stringify(node.val2)}\n`;
      case 'nested':
        return `${iter(node.children, depthKey).join('')}`;
      default:
        throw new Error(`Этого типа не существует: ${node.type}`);
    }
  });

  return `${iter(buildTree).join('').trim()}`;
};

export default formatPlain;
