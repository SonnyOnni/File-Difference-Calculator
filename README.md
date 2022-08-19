### Hexlet tests and linter status:
[![Actions Status](https://github.com/SonnyOnni/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/SonnyOnni/frontend-project-lvl2/actions)
<a href="https://codeclimate.com/github/SonnyOnni/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/03041ceb56bdff456e45/maintainability" /></a>
[![ESlint](https://github.com/SonnyOnni/frontend-project-lvl2/actions/workflows/eslint.yml/badge.svg)](https://github.com/SonnyOnni/frontend-project-lvl2/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/03041ceb56bdff456e45/test_coverage)](https://codeclimate.com/github/SonnyOnni/frontend-project-lvl2/test_coverage)

# Description: 
**Generator of difference** is the CLI programm that generate difference between two files. Supporting formats: JSON, YML, YAML.

## How to install:
1. Make sure you have installed [Node.js](https://nodejs.org/en/) no lower version 12: ```node -v```.
2. Clone repository: ```git@github.com:SonnyOnni/frontend-project-lvl2.git```.
3. Change directory to frontend-project-lvl2
4. Run the command: ```make install```.

```shell
$ git clone git@github.com:SonnyOnni/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
```

## Run tests:
```shell
$ make test
```

## How to use:
You can use the project as a script in the terminal or as a library in your JavaScript project. You can format the difference in three styles: stylish (default), plain and json.
```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
```

## Project asciinemas:
### Comparison of flat files (JSON):

[![asciicast](https://asciinema.org/a/510805.svg)](https://asciinema.org/a/510805)

### Comparison of flat files (YAML/YML):

[![asciicast](https://asciinema.org/a/512403.svg)](https://asciinema.org/a/512403)

### Comparison of YAML/YML and JSON files (format 'stylish'):

[![asciicast](https://asciinema.org/a/514310.svg)](https://asciinema.org/a/514310)

### Comparison of YAML/YML and JSON files (format 'plain'):

[![asciicast](https://asciinema.org/a/515060.svg)](https://asciinema.org/a/515060)

### Comparison of YAML/YML and JSON files (format 'json'):

[![asciicast](https://asciinema.org/a/515284.svg)](https://asciinema.org/a/515284)
