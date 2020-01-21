const path = require('path')

const aliases = (prefix) => {
  const dirPath = prefix || __dirname

  return {
    'app-modules': path.resolve(dirPath, 'app-modules/'),
    'example-template': path.resolve(dirPath, 'example-template/'),
    'shared': path.join(dirPath, 'example-template/src/shared')
  }
}

module.exports = aliases
