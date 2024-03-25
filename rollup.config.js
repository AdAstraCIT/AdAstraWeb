import postcss from 'rollup-plugin-postcss';

export default {
  // ...
  plugins: [
    svelte({
      // ...
    }),
    postcss({
      extract: true,
      minimize: true,
      use: [
        ['sass', {
          includePaths: [
            './src/theme',
            './node_modules'
          ]
        }]
      ]
    }),
    // ...
  ],
  // ...
};