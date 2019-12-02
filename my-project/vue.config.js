const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    //   .set('@assets',resolve('src/assets'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
        importLoaders: 1
      },
      less: {
        // 这里的选项会传递给 postcss-loader
        importLoaders: 1
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        importLoaders: 1
      }
    }
  }
};
