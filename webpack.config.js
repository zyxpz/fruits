const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const localIp = (() => {
  let ips = [];
  let os = require('os');
  let ntwk = os.networkInterfaces();
  for (let k in ntwk) {
    for (let i = 0; i < ntwk[k].length; i++) {
      let _add = ntwk[k][i].address;
      if (_add && _add.split('.').length == 4 && !ntwk[k][i].internal && ntwk[k][i].family == 'IPv4') {
        ips.push(ntwk[k][i].address);
      }
    }
  }
  // return ips[0] || 'localhost';
  return 'localhost';
})();

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  //设置开发者工具的端口号,不设置则默认为8080端口
  devServer: {
    host: localIp,
    contentBase: "/",
    port: '8181',
    inline: true,
    // compress: true, // gzip
    stats: 'errors-only',
    // historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 100,
      poll: 500,
      ignored: /node_modules/
    },
    proxy: {
      "/api": {
        target: "http://api.sunlightfruit.com",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    },
  },
  resolve: { // 区分 web & native 组件加载 antd-mobile 1.0.x
    mainFiles: ['index.web', 'index'],
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    extensions: ['.web.js', '.js', '.json'],
    alias: {}
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [
          // 制定src文件夹使用
          path.resolve(__dirname, 'src'),
        ],
      },
      { //css
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      { //scss
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      { //less
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
        loader: 'svg-sprite-loader',
        options: {
          limit: 10000
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: false,
      allChunks: true
    }),
    // 启动项目自启页面
    new OpenBrowserPlugin({
      url: 'http://localhost:8181/'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  // 生成环境 代码压缩
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
} else {
  new webpack.HotModuleReplacementPlugin();
}

config.externals = {
  'react': 'React',
  'react-dom': 'ReactDOM'
};
module.exports = config;