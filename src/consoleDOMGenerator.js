export default function(obj) {
  let p = document.createElement('p');
  if (typeof obj === 'string' || typeof obj === 'number') {
    p.appendChild(document.createTextNode(obj))
  }
  return p;
};
