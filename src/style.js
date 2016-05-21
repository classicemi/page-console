let style = `
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
