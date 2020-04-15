module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./'],
        extensions: ['.js', '.json'],
        alias: {
          _ui: './ui',
          _components: './ui/components',
          _elements: './ui/elements',
          _src: './src',
          _navigations: './src/navigations',
          _features: './src/features',
          _models: './src/models',
        },
      },
    ],
  ],
};
