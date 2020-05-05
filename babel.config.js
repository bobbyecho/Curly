module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@tests': './__tests__',
          '@ui': './ui',
          '@themes': './ui/themes',
          '@src': './src',
          '@features': './src/features',
          '@helpers': './src/helpers',
          '@models': './src/models',
          '@navigations': './src/navigations'
        }
      }
    ]
  ]
};
