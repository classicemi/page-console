var rollup = require('rollup');

rollup.rollup({
  entry: './src/index.js'
}).then(bundle => {
  bundle.write({
    format: 'cjs',
    dest: './lib/index.js'
  });
}).catch(err => {
  console.log(err);
});

rollup.rollup({
  entry: './test/test.source.js'
}).then(bundle => {
  bundle.write({
    format: 'iife',
    dest: './test/test.js'
  });
}).catch(err => {
  console.log(err)
});
