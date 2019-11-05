const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs-extra');
const appDirectory = fs.realpathSync(process.cwd());
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const pkg = require(resolveApp('package.json'));

function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD, DELETE, FETCH'
        },
		contentBase: './dist', // 告诉服务器从那个目录中提供内容
		compress: true, // 	启动gzip压缩
		// allowedHosts: [], // 白名单服务
		clientLogLevel: 'none',
		disableHostCheck: false, // 为true 容易受到dns攻击
		historyApiFallback: pkg.noRewrite //
            ? false
            : {
                  disableDotRule: true // 禁止url带小数点
			  },
		host: process.env.HOST || '0.0.0.0',
		hot: true,
		quiet: true, // 打开后，除了初识启动信息，其他内容不会打印到控制台
		https: process.env.HTTPS === 'true',
		overlay: false, // 是否在浏览器中显示编译错误
		watchContentBase: true, // 文件修改，会触发一次完整的页面重载
		// proxy: {
		// 	'/api': {
		// 	  target: 'http://localhost:3000',
		// 	  pathRewrite: {'^/api' : ''}
		// 	}
		//   }
		// lazy: true,
		// filename: '[name].bundle.js' // 减少编译，使用filename 只会在某个文件被请求时编译
	},
	entry: {
		app: './src/index.js',
		print: './src/print.js',
	},
	plugins: [
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: '管理输出'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.css$/,
	// 			use: [
	// 				'style-loader',
	// 				'css-loader'
	// 			]
	// 		},
	// 		{
	// 			test: /\.(png|svg|jpg|gif)$/,
	// 			use: [
	// 				'file-loader'
	// 			]
	// 		},
	// 		{
	// 			test: /\.(woff|woff2|eot|ttf|otf)$/,
	// 			use: [
	// 				'csv-loader'
	// 			]
	// 		},
	// 		{
	// 			test: /\.xml$/,
	// 			use: [
	// 				'xml-loader'
	// 			]
	// 		}
	// 	]
	// }
};