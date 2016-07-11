import * as watif from '../utils/is';

class PageConsoleDefault {
  constructor() {
    this.init();
  }

  init() {
    let global = window;

    this.origin = {
      log: global.console.log,
      error: global.console.error,
      warn: global.console.warn,
      info: global.console.info,
      debug: global.console.debug
    };

    global.console.log = (...args) => {
      this.print({
        type: 'log',
        content: args
      });
    };
    global.console.error = (...args) => {
      this.print({
        type: 'error',
        content: args
      });
    };
    global.console.warn = (...args) => {
      this.print({
        type: 'warn',
        content: args
      });
    };
    global.console.info = (...args) => {
      this.print({
        type: 'info',
        content: args
      });
    };
    global.console.debug = (...args) => {
      this.print({
        type: 'debug',
        content: args
      });
    };
  }

  print(opt) {
    let self = this;
    let output = [];
    let content = Array.prototype.slice.call(opt.content);

    opt.content.forEach((item, idx) => {
      try {
        if (watif.isFunction(item)) {
          output.push(item.toString());
        } else if (watif.isArray(item)) {

        } else if (watif.isObject(item)) {

        } else { // default
          output.push(item);
        }
      } catch (err) {

      }
    });

    if (typeof this.origin[opt.type] === 'function') {
      this.origin[opt.type].apply(window.console, content);
    }
  }
}

let defaultConsole = new PageConsoleDefault();

export default defaultConsole;
