const path = require("path");

//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
    //设置生成预览页面的模板文件
    template: "./src/index.html",
    //设置生成的预览页面名称
    filename: "index.html"
})

module.exports = {
    mode: "development", //可以设置为development(开发模式)，production(发布模式)
    //设置入口文件路径
    entry: path.join(__dirname, "./src/index.js"),
    //设置出口文件
    output: {
        //设置路径
        path: path.join(__dirname, "./dist"),
        //设置文件名
        filename: "bundle.js"
    },
    plugins: [htmlPlugin],
    module: {
        rules: [{
            //test设置需要匹配的文件类型，支持正则
            test: /\.css$/,
            //use表示该文件类型需要调用的loader
            use: ['style-loader', 'css-loader']
        }]
    }
}