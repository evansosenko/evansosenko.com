const { createTransformer } = require('babel-jest')

const babelOptions = {
  presets: ['babel-preset-gatsby']
}

module.exports = createTransformer(babelOptions)
