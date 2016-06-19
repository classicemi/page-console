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
import HASH from './hash';
import style from './style';
import tpl from './tpl';

/**
 * Alias
 */
let $ = function(selector) {
  let match = document.querySelectorAll(selector);
  if (match.length === 1) {
    return match[0];
  }
  return match;
};
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
    this.tabs = ['Console', 'Environment', 'Network'];
    this.tpl = tpl;
  }

  open() {
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
    this.tabs.forEach(tab => {
      let li = document.createElement('li');
      li.innerText = tab;
      li.dataset.tabType = tab;
      tabItems.appendChild(li);
    });
    this.tab.appendChild(tabItems);
    this.tab.addEventListener('click', (e) => {
      this.tab.childNodes.forEach(child => {
        child.classList.remove('active');
      });
      e.target.classList.add('active');
      this.switchTab(e.target.tabType);
    });
    this.tab.firstChild.classList.add('active');

    // tab panels
    this.tabPanels = $(`#${this.console.id}-tab-panels`);
    this.tabs.forEach(tab => {
      let tabPanel = document.createElement('div');
      tabPanel.id = `_page-console-${HASH}-${tab.toLowerCase()}-panel`;
      this.tabPanels.appendChild(tabPanel);
    });

    console.log(this);
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

  }
}

export default new PageConsole();
