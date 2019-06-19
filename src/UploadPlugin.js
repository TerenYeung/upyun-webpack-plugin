const
  Upyun = require('upyun-js'),
  path = require('path'),
  fs = require('fs'),
  PLUGIN_NAME = 'UpyunUploadPlugin';

class UpyunUploadPlugin {
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
      localPath,
    } = this.config;

    // 在生成资源到 output 目录后，触发上传操作
    compiler.hooks.afterEmit.tap(PLUGIN_NAME, () => {
      const isDirectory = fs.existsSync(localPath) && fs.statSync(localPath).isDirectory();
      if (isDirectory) {
        this.upyun.uploadDir(remotePath, localPath);
      } else {
        this.upyun.uploadFile(remotePath, localPath);
      }
    });
  }
}

module.exports = UpyunUploadPlugin;

