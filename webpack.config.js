const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')
console.log({outputPath})

module.exports = {
    entry: './src/index.js', // webpackのバンドル対象
    output:{
        // filename: 'main.js',
        filename: 'main.js',
        path: outputPath
    }
}