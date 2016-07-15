import * as watif from '../utils/is';
import render from '../utils/render';
import { $ } from '../utils/query';
import HASH from '../hash';

class PageConsoleDefault {
  constructor() {
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
    let panel = $(`#_page-console-${HASH}-console-panel`);
    let output = [];
    let content = Array.prototype.slice.call(opt.content);

    for (let i = 0, len = opt.content.length; i < len; i++) {
      let item = opt.content[i];
      try {
        if (watif.isFunction(item)) {
          output.push(item.toString());
        } else if (watif.isArray(item)) {
          output.push(this.formatArray(item));
        } else if (watif.isObject(item)) {
          output.push(this.formatObject(item));
        } else { // default string
          output.push(item);
        }
      } catch (err) {

      }
    }

    // this.origin.log.call(window.console, opt);

    let dom = render({
      type: opt.type,
      content: output
    });
    panel.appendChild(dom);

    if (typeof this.origin[opt.type] === 'function') {
      this.origin[opt.type].apply(window.console, content);
    }
  }

  formatArray(arr) {
    return `[${arr.toString()}]`;
  }

  formatObject(obj) {
    let objStr = JSON.stringify(obj);
  }
}

let defaultConsole = new PageConsoleDefault();

export default defaultConsole;
