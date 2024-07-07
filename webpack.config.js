const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const isProduction = process.env.NODE_ENV == 'production';

const config = {
	...defaultConfig,
	module: {
		...defaultConfig.module,
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								indentWidth: 4,
								includePaths: [path.resolve(__dirname, 'node_modules')],
							}
						}
					}
				],
			},
			...defaultConfig.module.rules
		]
	},
	resolve: {
		...defaultConfig.resolve,
		extensions: ['.ts', '.tsx', '.js', 'jsx', 'sass'],
		alias: {
			react: path.resolve('./node_modules/react')
		}
	}
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};