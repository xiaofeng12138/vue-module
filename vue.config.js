const path = require('path')
module.exports ={
    pages:{
        index:{
            entry:`./src/project/${process.env.VUE_APP_PROJECT}/main.js`,
        },
    },
    lintOnSave:false,
    chainWebpack:config=>{
      //svg配置
      config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
      config.module
        .rule('svg-sprite-loader').test(/\.svg$/)
        .include
        .add(path.resolve('./src/assets/svg')) //处理svg目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
    },

    css: {
            requireModuleExtension:true,
            loaderOptions: {
              scss: {
                prependData: `@import "~@/styles/${process.env.VUE_APP_PROJECT}/index.scss";`
              },
            }
          },

      configureWebpack:(config)=>{
        config.resolve = { // 配置解析别名
          extensions: ['.js', '.json', '.vue'],  // 自动添加文件名后缀
          alias: {
            '@': path.resolve(__dirname, './src'),
            '@c': path.resolve(__dirname, './src/components'),
            '@api': path.resolve(__dirname, './src/api')
          }
        }
   }
}