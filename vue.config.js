module.exports = {
    configureWebpack:{
        resolve:{/*给路径配置别名*/
            alias:{
                'assets':'@/assets',//@指的是src文件夹
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
            }
        }
    }
}
