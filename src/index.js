/**
 * author: @classicemi
 * GitHub: https://github.com/classicemi
 * E-mail: wushuang_1227@163.com
 * Weibo: @吴双Orange
 */

/**
 * Imports
 */
import { buttonTpl, consoleTpl } from './tpl';
import { $ } from './utils/query';
import HASH from './hash';
import style from './style';
import tpl from './tpl';
import environment from './environment/environment';
import defaultConsole from './default/default';

/**
 * Alias
 */
let _originalConsole = window.console;
let bodyElement = document.getElementsByTagName('body')[0];

/**
 * Insert inline stylesheet into the page
 */
function insertStyle(style) {
  var styleNode = document.createElement('style');
  var styleTextNode = document.createTextNode(style);
  styleNode.rel = 'stylesheet/css';
  styleNode.appendChild(styleTextNode);
  bodyElement.appendChild(styleNode);
}
insertStyle(style);

/**
 * Class Definition of Page-Console
 */
class PageConsole {
  constructor() {
    this.tabs = ['Console', 'Environment'];
    this.tpl = tpl;
    this.environment = environment;
  }

  init() {
    // console container
    this.console = document.createElement('div');
    this.console.id = `_page-console-${HASH}`;
    this.console.innerHTML = this.tpl;
    bodyElement.appendChild(this.console);

    // switch button
    this.button = $(`#${this.console.id}-switch`);
    this.button.addEventListener('click', () => {
      this.switchStatus('open');
    }, false);

    // mask
    this.mask = $(`#${this.console.id}-mask`);
    this.mask.addEventListener('click', () => {
      this.switchStatus('close');
    }, false);

    // console panel
    this.panel = $(`#${this.console.id}-panel`);

    // tab
    this.tab = $(`#${this.console.id}-tabs ul`);
    let tabItems = document.createDocumentFragment();
    for (let i = 0, len = this.tabs.length; i < len; i++) {
      let li = document.createElement('li');
      li.innerText = this.tabs[i];
      li.dataset.tabType = this.tabs[i].toLowerCase();
      tabItems.appendChild(li);
    }
    this.tab.appendChild(tabItems);
    this.tab.addEventListener('click', e => {
      // // alert(this.tab.childNodes);
      // for (let i = 0, len = this.tab.childNodes.length; i < len; i++) {
      //   this.tab.childNodes[i].classList.remove('active');
      // }
      //
      // e.target.classList.add('active');
      let type = e.target.dataset['tabType'];
      this.switchTab(type);
    });

    // tab panels
    this.tabPanels = $(`#${this.console.id}-tab-panels`);
    for (let i = 0, len = this.tabs.length; i < len; i++) {
      let tabPanel = document.createElement('div');
      tabPanel.id = `_page-console-${HASH}-${this.tabs[i].toLowerCase()}-panel`;
      this.tabPanels.appendChild(tabPanel);
    }

    // console
    defaultConsole.init();

    // environment
    $(`#_page-console-${HASH}-environment-panel`).appendChild(environment.container);

    // console.log(this);
    this.switchTab(this.tabs[0]);
  }

  switchStatus(status) {
    if (!status) {
      return console.error('Please specify a status to switch to.');
    }
    switch (status) {
      case 'open':
        this.console.classList.add(`_page-console-${HASH}-active`);
        break;
      case 'close':
        this.console.classList.remove(`_page-console-${HASH}-active`);
        break;
    }
  }

  switchTab(type) {
    for (let i = 0, len = this.tab.childNodes.length; i < len; i++) {
      this.tab.childNodes[i].classList[this.tab.childNodes[i].dataset['tabType'] === type.toLowerCase() ? 'add' : 'remove']('active');
      this.tabPanels.childNodes[i].style.display = 'none';
    }
    $(`#_page-console-${HASH}-${type.toLowerCase()}-panel`).style.display = 'block';
  }
}

let pageConsole = new PageConsole();

module.exports = pageConsole;
