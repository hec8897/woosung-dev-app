module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: { 
      '/': {
        target: 'http://localhost:3000',
          changeOrigin: true
      },
      '/api': { 
        target: 'http://localhost:3000',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  publicPath: "./",
  outputDir: "../server/public/cafe",

}