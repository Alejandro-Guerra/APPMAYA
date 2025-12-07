const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Usar el transformer de SVG
  config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  // Quitar svg de los assets "normales"
  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== 'svg'
  );

  // Y añadir svg como extensión de código fuente
  config.resolver.sourceExts.push('svg');

  return config;
})();
