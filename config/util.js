const path = require('path')
/**
 * 路径格式化
 * @param {string} paths 目标路径
 */
const basePath = paths => (path.resolve(process.cwd(),paths))

module.exports = {
    basePath
}