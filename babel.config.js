module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        alias: [
          {
            'pages/*': './pages/*',
            'assets/*': './assets/*',
            'components/*': './components/*',
            'routes/*': './routes/*',
            'navigations/*': './navigations/*',
            'interfaces/*': './interfaces/*',
            'utils/*': './utils/*',
            'context/*': './context/*',
          },
        ],
        extensions: ['.tsx', '.ts', '.js', '.json', '.txt'],
      },
    ],
    'babel-plugin-styled-components',
    'react-native-reanimated/plugin',
  ],
};
