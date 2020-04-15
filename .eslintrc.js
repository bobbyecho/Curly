module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ["ui", "src"],
        alias: {
          _ui: "./ui",
          _components: "./ui/components",
          _elements: "./ui/elements",
          _src: "./src",
          _navigations: "./src/navigations",
          _features: "./src/features",
          _models: "./src/models",
        },
      },
    },
  },
};