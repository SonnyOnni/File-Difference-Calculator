import yaml from 'js-yaml';

const parserForFormats = (file, fileFormat) => {
  switch (fileFormat) {
    case 'json':
      return JSON.parse(file);
    case 'yaml':
      return yaml.load(file);
    case 'yml':
      return yaml.load(file);
    default:
      throw new Error(`Format "${fileFormat}" is not supported.`);
  }
};

export default parserForFormats;
