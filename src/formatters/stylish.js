import _ from 'lodash';

const indent = (depth, spaceCount = 4) => ' '.repeat(spaceCount * depth - 2);
const stringify = (currentValue, depth) => {
  if (!_.isObject(currentValue)) {
    return `${currentValue}`;
  }

  const lines = Object
    .entries(currentValue)
    .map(([key, val]) => `${indent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${indent(depth)}  }`,
  ].join('\n');
};

const stylish = (diffTree) => {
  const iter = (tree, depth) => tree.map((node) => {
    const getValue = (value, sign) => `${indent(depth)}${sign} ${node.key}: ${stringify(value, depth)}\n`;
    switch (node.type) {
      case 'added':
        return getValue(node.val, '+');
      case 'removed':
        return getValue(node.val, '-');
      case 'unchanged':
        return getValue(node.val, ' ');
      case 'changed':
        return `${getValue(node.val1, '-')}${getValue(node.val2, '+')}`;
      case 'recursion':
        return `${indent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('')}${indent(depth)}  }\n`;
      default:
        throw new Error(`Этого типа не существует: ${node.type}`);
    }
  });
  return `{\n${iter(diffTree, 1).join('')}}`;
};

export default stylish;
