const path = require('path')
module.exports ={
    pages:{
        index:{
            entry:`./src/project/${process.env.VUE_APP_PROJECT}/main.js`,
        },
    },
    lintOnSave:false,

    css: {
            requireModuleExtension:true,
            loaderOptions: {
              scss: {
                prependData: `@import "~@/styles/main/main.scss";`
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