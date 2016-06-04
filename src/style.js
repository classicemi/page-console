import HASH from './hash';

let style = `
#_page-console-${HASH}-switch {
  display: block;
  padding: 0.6em 1em;
  line-height: 1;
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 1em;
  color: #fff;
  background-color: #4993e5;
  border: 1px solid #4993e5;
  border-radius: 4px;
  white-space: nowrap;
  vertical-align: middle;
  box-sizing: border-box;
  outline: none;
}

#_page-console-${HASH}-switch:active {
  background-color: #2d81e1;
  border-color: #297ee0;
}

#_page-console-${HASH}-mask {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 10000;
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
