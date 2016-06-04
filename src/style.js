import HASH from './hash';

const BLUE = '#66B3DE';
const MAIN = '#384551';
const BLACK = '#323C45';
const WHITE = '#FFF';

let style = `
#_page-console-${HASH} {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
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
  color: ${WHITE};
  background-color: ${MAIN};
  border: 1px solid ${MAIN};
  border-radius: 3rem;
  white-space: nowrap;
  vertical-align: middle;
  box-sizing: border-box;
  outline: none;
}

#_page-console-${HASH}-switch:active {
  background-color: ${BLACK};
  border-color: ${BLACK};
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
  background-color: ${MAIN};
  z-index: 10001;
  transform: translateY(100%);
  transition: all 0.3s;
}
._page-console-${HASH}-active #_page-console-${HASH}-panel {
  transform: translate(0);
}

#_page-console-${HASH}-tab ul {
  list-style: none;
  font-size: 0;
  border-bottom: 1px solid ${BLACK};
  text-align: right;
}

#_page-console-${HASH}-tab li {
  display: inline-block;
  padding: 0 .7rem;
  font-size: 1rem;
  line-height: 2rem;
  color: ${WHITE};
}

.__page-console-wrapper {
  position: absolute;
  top: 5px;
  bottom: 5px;
  right: 5px;
  width: 280px;
  padding: 26px 10px 10px;
  background: rgba(228, 223, 184, 1);
  border-radius: 6px;
  box-shadow: 0 0 6px #ccc;
  z-index: 999999;
}

.__page-console-wrapper p,
.__page-console-wrapper ul {
  margin: 0;
  padding: 0;
}

.__page-console-wrapper li {
  margin-bottom: 5px;
  padding: 5px;
  width: 100%;
  list-style: none;
  box-sizing: border-box;
  border: 1px solid rgba(185, 181, 151, 0);
  transition: all .3s;
  font-family: Menlo, Consolas, "Courier New", Courier, FreeMono, monospace;
  font-size: 12px;
  color: #444;
}
.__page-console-wrapper li:hover {
  border-radius: 6px;
  border: 1px solid rgba(185, 181, 151, .4);
  background-color: rgba(185, 181, 151, .4);
}

.__page-console-close {
  position: absolute;
  right: 5px;
  top: 5px;
}
.__page-console-close:after {
  content: 'x';
  font-family: Consolas, "Courier New", Courier, FreeMono, monospace;
}
`;

export default style;
