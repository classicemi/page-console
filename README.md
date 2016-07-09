[![NPM](https://nodei.co/npm/page-console.png)](https://npmjs.org/package/page-console)

# page-console
This module can be used to redirecting console messages to webpages. All the messages will be shown in wrappers which are at the bottom of the page. It is also capable to capture all the JavaScript error and show them in wrappers as well.

## Usage
```javascript
var pageConsole = require('page-console');
pageConsole(console);

console.log('log message'); // 'log message' shown in your webpage
```

## License
ISC