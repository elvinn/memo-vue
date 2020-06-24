module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '备忘录',
    },
    oauth: {
      entry: 'src/pages/oauth/main.js',
      template: 'public/index.html',
      filename: 'oauth.html',
      title: '备忘录 - 登陆',
    },
  },
  publicPath: '/memo-vue',
  devServer: {
    disableHostCheck: true,
  },
};
