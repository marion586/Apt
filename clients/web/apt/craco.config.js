const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#3644D9',
              '@info-color': '#ECAE00',
              '@padding-md': '25px',
              '@border-radius-base': '4px',
              '@font-family': 'inter',
              '@typography-title-font-weight': '900',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/Assets'),
      '@components': path.resolve(__dirname, 'src/Components'),
      '@config': path.resolve(__dirname, 'src/Config'),
      '@containers': path.resolve(__dirname, 'src/Containers'),
      '@graphQL': path.resolve(__dirname, 'src/GraphQL'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
      '@images': path.resolve(__dirname, 'src/Images'),
      '@lib': path.resolve(__dirname, 'src/Lib'),
      '@pages': path.resolve(__dirname, 'src/Pages'),
      '@providers': path.resolve(__dirname, 'src/Providers'),
      '@routes': path.resolve(__dirname, 'src/Routes'),
      '@themes': path.resolve(__dirname, 'src/Themes'),
    },
  },
};
