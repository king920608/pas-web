'use strict'
const path = require('path')  

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: './', // 部署应用包时的基本 url
    outputDir: 'dist', // build 构建文件目录
    assetsDir: 'static', // 静态资源目录
    productionSourceMap: false, // 禁用生产环境的 source map
    runtimeCompiler: true, // 是否运行时组件中使用 template
    devServer: {
        host: '127.0.0.1', // 默认是 localhost,可不配置
        port: 8080, // 配置端口号
        open: false, // 启动是否打开浏览器
    },
    configureWebpack(config) {
            Object.assign(config, {
                resolve: {
                    alias: {
                        '@': resolve('src')
                    }
                } 
            })
        
    },
    chainWebpack(config) {
        config
            .when(process.env.NODE_ENV === 'production',
                config => {
                     
                    config.optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial'
                            },
                            elementUI: {
                                name: 'chunk-elementUI',
                                priority: 20,
                                test: /[\\/]node_modules[\\/]_?element-ui(.*)/
                            },
                            commons: {
                                name: 'chunk_commons',
                                test: resolve('src/components'),
                                minChunks: 3,
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    })
                    config.optimization.runtimeChunk('single')
                }
            )
    }
}


