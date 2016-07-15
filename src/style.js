import HASH from './hash';

const DEFAULT_FONT_COLOR = 'rgb(204, 204, 204)';
const MAIN_BG = 'rgb(36, 36, 36)';
const MAIN_BG_ACTIVE = 'rgb(54, 54, 54)';
const TABS_BG = 'rgb(42, 42, 42)';
const TABS_BORDER = 'rgb(61, 61, 61)';
const TAB_BORDER_ACTIVE = 'rgb(193, 125, 8)';
const CONSOLE_DEFAULT_FONT_COLOR = 'rgb(187, 195, 204)';
const CONSOLE_ITEM_BORDER = 'rgb(43, 43, 43)';

const BLUE = '#66B3DE';
const MAIN = '#384551';
const BLACK = '#323C45';
const WHITE = '#FFF';

let style = `
#_page-console-${HASH} {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}

#_page-console-${HASH} ul,
#_page-console-${HASH} li {
  list-style: none;
  margin: 0;
  padding: 0;
}

#_page-console-${HASH}-switch {
  display: block;
  line-height: 1;
  position: fixed;
  width: 3rem;
  height: 3rem;
  bottom: 10px;
  right: 10px;
  font-size: 1rem;
  color: ${DEFAULT_FONT_COLOR};
  background-color: ${MAIN_BG};
  border: 1px solid ${MAIN_BG};
  border-radius: 3rem;
  white-space: nowrap;
  vertical-align: middle;
  box-sizing: border-box;
  outline: none;
}

#_page-console-${HASH}-switch:active {
  background-color: ${MAIN_BG_ACTIVE};
  border-color: ${MAIN_BG_ACTIVE};
}

#_page-console-${HASH}-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0);
  opacity: 0;
  z-index: -10;
  transition: opacity 0.3s;
}
._page-console-${HASH}-active #_page-console-${HASH}-mask {
  opacity: 0.5;
  z-index: 10000;
}

#_page-console-${HASH}-panel {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 70%;
  z-index: 10001;
  transform: translateY(100%);
  transition: all 0.3s;
  background-color: ${MAIN_BG};
}
._page-console-${HASH}-active #_page-console-${HASH}-panel {
  transform: translate(0);
}

#_page-console-${HASH}-tabs {
  background-color: ${TABS_BG};
  border-bottom: 1px solid ${TABS_BORDER};
}

#_page-console-${HASH}-tabs ul {
  margin-bottom: -1px;
  list-style: none;
  font-size: 0;
  text-align: right;
}

#_page-console-${HASH}-tabs li {
  display: inline-block;
  padding: 0 .7rem;
  font-size: .9rem;
  line-height: 1.8rem;
  color: ${DEFAULT_FONT_COLOR};
}

#_page-console-${HASH}-tabs li.active {
  border-bottom: 2px solid ${TAB_BORDER_ACTIVE};
}

#_page-console-${HASH}-tab-panels > div {
  display: none;
}

#_page-console-${HASH}-tab-panels li {
  padding: .25rem .5rem;
  border-bottom: 1px solid ${CONSOLE_ITEM_BORDER};
  line-height: 1.3;
  color: ${CONSOLE_DEFAULT_FONT_COLOR};
  font-family: Menlo, Consolas;
  font-size: .7rem;
}

._page-console-${HASH}-item {
  color: ${CONSOLE_DEFAULT_FONT_COLOR};
  padding: .25rem .5rem;
  border-bottom: 1px solid ${CONSOLE_ITEM_BORDER};
  font-family: Menlo, Consolas;
  font-size: .7rem;
  line-height: 1.3;
  word-break: break-word;
}
`;

export default style;
