[![NPM](https://nodei.co/npm/page-console.png)](https://npmjs.org/package/page-console)

# page-console
[![npm](https://img.shields.io/npm/v/page-console.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/dm/page-console.svg?maxAge=2592000)]()
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/classicemi/page-console/develop/LICENSE)

This module can be used to redirecting console messages to webpages. All the messages will be shown in wrappers which are at the bottom of the page. It is also capable to capture all the JavaScript error and show them in wrappers as well.

## Usage
```javascript
var pageConsole = require('page-console');
pageConsole(console);

console.log('log message'); // 'log message' shown in your webpage
```

## License
MIT