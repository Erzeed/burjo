/* eslint-disable max-len */
/* eslint-disable new-cap */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
// const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
// const ImageminMozjpeg = require('imagemin-mozjpeg');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /styles/,
        use: ['to-string-loader', 'css-loader'],
      },
      {
        test: /\.css$/i,
        include: /styles/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new CssMinimizerPlugin({
        exclude: /\/excludes/,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new WebpackPwaManifest({
      id: 'burjo-restaurant-catalogue',
      name: 'Burjo',
      short_name: 'Burjo',
      description: 'web app explore restaurant',
      background_color: '#ffffff',
      crossorigin: null,
      publicPath: './',
      filename: 'app.manifest.json',
      start_url: './index.html',
      icons: [
        {
          src: path.resolve('src/public/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    // new ImageminWebpackPlugin({
    //   plugins: [
    //     ImageminMozjpeg({
    //       quality: 80,
    //       progressive: true,
    //     }),
    //   ],
    // }),
    // new ImageminWebpWebpackPlugin({
    //   config: [
    //     {
    //       test: /\.(jpe?g|png)/,
    //       options: {
    //         quality: 80,
    //       },
    //     },
    //   ],
    //   overrideExtension: true,
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/heros/**'],
          },
        },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.bundle.js',
    }),
    new MiniCssExtractPlugin(
        {
          filename: '[name].css',
        }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
