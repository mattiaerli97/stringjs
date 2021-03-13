import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle/bundle.js',
    format: 'cjs',
  },
  plugins: [uglify()],
};
