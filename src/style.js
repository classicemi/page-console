let style = `
.__page-console-wrapper {
  position: absolute;
  top: 5px;
  bottom: 5px;
  right: 5px;
  width: 280px;
  padding: 10px;
  background: rgba(228, 223, 184, 1);
  z-index: 999999;
}

.__page-console-wrapper p {
  margin: 0;
}

.__page-console-close {
  position: absolute;
  right: 5px;
  top: 5px;
}
.__page-console-close:after {
  content: 'x';
}
`;

export default style;
