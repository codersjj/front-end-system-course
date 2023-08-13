const path = require('path')
const CracoLessPlugin = require("craco-less");

/**
 * Resolve path for a project.
 * @param {string} filePath Relative path from project root
 * @returns {string} The resolved absolute path.
 */
const resolve = filePath => path.resolve(__dirname, filePath)

module.exports = {
  // webpack
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  },
  plugins: [
    // less
    {
      plugin: CracoLessPlugin
    }
  ]
}