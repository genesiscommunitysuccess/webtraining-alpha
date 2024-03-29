const crypto = require('crypto');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { appStyleRules } = require('../rules/styleRules');
const { appFileRules } = require('../rules/fileRules');
const { appScriptRules } = require('../rules/scriptRules');

// Avoid MD4 hash for OpenSSL 3 compatibility
// https://github.com/cockpit-project/starter-kit/commit/3220617fec508aabbbc226a87a165c21fb72e913
// Using Webpack v5.54.0+ and output.hashFunction = "xxhash64" should make this unnecessary, however
// builds still fail with an OpenSSL error in practice
const cryptoOrigCreateHash = crypto.createHash;
crypto.createHash = (algorithm) => cryptoOrigCreateHash(algorithm == 'md4' ? 'sha256' : algorithm);

const readFile = (filePath) => {
  if (!filePath) return '';
  const configPath = path.resolve(process.cwd(), filePath);
  try {
    return fs.readFileSync(configPath, 'utf8');
  } catch (e) {
    console.error(e);
    return '';
  }
};

module.exports = {
  entry: path.resolve(process.cwd(), './src/index.ts'),
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: JSON.stringify(process.env.API_HOST),
      DEFAULT_USER: JSON.stringify(process.env.DEFAULT_USER),
      DEFAULT_PASSWORD: JSON.stringify(process.env.DEFAULT_PASSWORD),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      FORCE_HTTP: JSON.stringify(process.env.FORCE_HTTP),
      HTTP_CONFIG: JSON.stringify(readFile(process.env.HTTP_CONFIG_PATH)),
      SOCKET_EXT: JSON.stringify(process.env.SOCKET_EXT),
    }),
    new webpack.ProgressPlugin(),
    // new CleanWebpackPlugin(), // TODO: FUI-294 - Investigate working directory error
    new MiniCssExtractPlugin(),
    new webpack.WatchIgnorePlugin({
      paths: [/\.js$/, /\.d\.ts$/],
    }),
  ],
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      appScriptRules.typescript(),

      // Files
      appFileRules.fonts(),
      appFileRules.html(),
      appFileRules.images(),

      // Styles
      appStyleRules.headCss(),
      appStyleRules.css(),
      appStyleRules.sass(),
    ],
  },
  experiments: {
    topLevelAwait: true,
    lazyCompilation: false,
    // outputModule: true,
  },
};
