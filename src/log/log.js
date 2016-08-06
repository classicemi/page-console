import PageConsolePlugin from '../console/plugin';

class PageConsoleLog extends PageConsolePlugin {
  constructor(...args) {
    super(...args);

    this.isReady = false;
  }

  init() {
    this.isReady = true;
  }
}

export default PageConsoleLog;
