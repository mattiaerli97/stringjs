import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle/bundle.js',
    format: 'cjs',
  },
  plugins: [terser()],
};
