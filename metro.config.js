// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// https://github.com/facebook/metro/issues/535
// https://github.com/apollographql/apollo-client/releases/tag/v3.5.4
config.resolver.sourceExts = process.env.RN_SRC_EXT
	? [...process.env.RN_SRC_EXT.split(',').concat(config.resolver.sourceExts), 'cjs'] // <-- cjs added here
	: [...config.resolver.sourceExts, 'cjs']; // <-- cjs added here

// https://docs.expo.dev/bare/installing-updates/
config.transformer.assetPlugins = [
	...config.transformer.assetPlugins,
	'expo-asset/tools/hashAssetFiles',
];
module.exports = config;