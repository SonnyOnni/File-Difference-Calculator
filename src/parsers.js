import yaml from 'js-yaml';

const parserForFormats = (file, fileFormat) => {
  let newFile;
  if (fileFormat === 'json') {
    newFile = JSON.parse(file);
  } else if (fileFormat === 'yaml' || fileFormat === 'yml') {
    newFile = yaml.load(file);
  }

  return newFile;
};

export default parserForFormats;
