/**
 * basic plugin class
 */
class PageConsolePlugin {
  constructor(id) {
    this.id = id;
    this.evts = {};
  }

  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val.toLowerCase();
  }

  on(evt, cb) {
    this.evts[evt] = cb;
    return this;
  }

  trigger(evt, data) {
    return typeof this.evts[evt] === 'function'
      ? this.evts[evt].call(this, data)
      : (this[evt] && this[evt]());
  }
}

export default PageConsolePlugin;
