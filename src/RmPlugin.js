const
  Upyun = require('upyun-js'),
  path = require('path'),
  fs = require('fs'),
  PLUGIN_NAME = 'UpyunUploadPlugin';

class UpyunRmPlugin {
  constructor(config) {
    const{
      serviceName,
      operatorName,
      operatorPassword,
    } = this.config = config;

    this.upyun = new Upyun({
      serviceName,
      operatorName,
      operatorPassword,
    });
  }

  apply(compiler) {
    const {
      remotePath,
    } = this.config;

    // 在生成资源到 output 目录后，触发上传操作
    compiler.hooks.afterEmit.tap(PLUGIN_NAME, () => {
      // 这里判断用户传递的路径是否包含 extname 作为是否为目录依据，虽然有失严谨
      const isDirectory = !path.parse(remotePath).ext;

      if (isDirectory) {
        this.upyun.rmdir(remotePath);
      } else {
        this.upyun.rmfile(remotePath);
      }
    });
  }
}

module.exports = UpyunRmPlugin;

