class PageConsoleEnvironment {
  constructor() {
    this.environmentInfo = [];

    this.init();
  }

  init() {
    let global = window;

    // current time
    let current = new Date();
    this.environmentInfo.push(`[Current Time] ${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}.${current.getMilliseconds()}`);

    // protocol
    this.environmentInfo.push(`[Protocol] ${location.protocol.toUpperCase().replace(/:$/, '')}`);

    // ua
    let ua = navigator.userAgent;
    let ds = '';
    ds = ua.match(/(android|iphone|ipad|ipod).*/i);
    let device = ds !== null ? ds[1] : 'Unknown Device';
    this.environmentInfo.push(`[Device] ${device}`);

    // performance
    let perf = global.performance
            || global.webkitPerformance
            || global.msPerformance;
    console.log(perf);

    let navType = '';
    switch (perf.navigation.type) {
      case 0:
        navType = 'Normal Navigate';
        break;
      case 1:
        navType = 'Reload';
        break;
      case 2:
        navType = 'Back or Forward';
        break;
      case 255:
      default:
        navType = 'Unknown Other Way';
        break;
    }
    this.environmentInfo.push(`[Performance Navigation Type] ${navType}`);
    let redirectCount = perf.navigation.redirectCount;
    if (redirectCount) {
      this.environmentInfo.push(`[Performance Redirect Count] ${redirectCount}`);
    }
  }
}

let environment = new PageConsoleEnvironment();

export default environment;