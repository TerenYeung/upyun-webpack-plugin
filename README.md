
![npm](https://img.shields.io/npm/dw/upyun-webpack-plugin.svg)
![license](https://img.shields.io/badge/license-Anti%20996-99ccff.svg)

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>

  <h1>Upyun Webpack Plugin</h1>
  <p>A webpack plugin of upyun</p></div>

<h2 align="center">Install</h2>

```bash
  npm i --save-dev upyun-webpack-plugin
```

This is a [webpack](http://webpack.js.org/) plugin that integrates [upyun-js](https://github.com/TerenYeung/upyun-js) into webpack, which can implement automatic workflow for upyun file handling.

<h2 align="center">Usage</h2>

<p><strong>Upyun upload plugin</strong></p>

```js
const
  {UpyunUploadPlugin} = require('upyun-webpack-plugin');

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new UpyunUploadPlugin({
      serviceName: '<upyun service>',
      operatorName: '<upyun operatorname>',
      operatorPassword: '<upyun password>',
      remotePath: '<remote folder>',
      localPath: '<local folder or file>'
    }),
  ]
}
```

---

<p><strong>Upyun download plugin</strong></p>

```js
const
  {UpyunDownloadPlugin} = require('upyun-webpack-plugin');

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new UpyunDownloadPlugin({
      serviceName: '<upyun service>',
      operatorName: '<upyun operatorname>',
      operatorPassword: '<upyun password>',
      remotePath: '<remote folder>',
      localPath: '<local folder or file>'
    }),
  ]
}
```
---

<p><strong>Upyun remove file(s) plugin</strong></p>

```js
const
  {UpyunRmPlugin} = require('upyun-webpack-plugin');

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new UpyunRmPlugin({
      serviceName: '<upyun service>',
      operatorName: '<upyun operatorname>',
      operatorPassword: '<upyun password>',
      remotePath: '<remote folder>',
      localPath: '<local folder or file>'
    }),
  ]
}
```


