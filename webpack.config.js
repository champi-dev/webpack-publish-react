const path = require('path')
const aliases = require('./path-aliases')

module.exports = {
  mode: 'production',
  entry: {
    appModules: './src/app-modules/exports.js'
  },
  output: {
    path: path.resolve('lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              "plugins": [
                ["module-resolver", {
                  "root": ["./src"],
                  "alias": aliases(path.join(__dirname, '/src/'))
                }],
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-react-jsx"
              ]
            }
          }
        ],
      }
    ]
  }
}
