'use strict'
const path = require('path')  

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: './', // ����Ӧ�ð�ʱ�Ļ��� url
    outputDir: 'dist', // build �����ļ�Ŀ¼
    assetsDir: 'static', // ��̬��ԴĿ¼
    productionSourceMap: false, // �������������� source map
    runtimeCompiler: true, // �Ƿ�����ʱ�����ʹ�� template
    devServer: {
        host: '127.0.0.1', // Ĭ���� localhost,�ɲ�����
        port: 8080, // ���ö˿ں�
        open: false, // �����Ƿ�������
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


