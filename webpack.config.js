const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js", // Add contenthash for JS files
    path: path.resolve(__dirname, "dist"),
    clean: true, // This will clean the /dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"], // Add this rule for HTML files
      },
      {
        test: /\.scss$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[hash][ext]", // Add hash to image filenames
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all", // This enables code splitting for all types of chunks
    },
    minimizer: [
      "...", // This keeps other default minimizers (like Terser for JS)
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["imagemin-gifsicle", { interlaced: true }],
              ["imagemin-mozjpeg", { quality: 75 }],
              ["imagemin-pngquant", { quality: [0.65, 0.9], speed: 4 }],
              [
                "imagemin-svgo",
                {
                  plugins: [
                    { name: "preset-default" },
                    { removeViewBox: false },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Add contenthash for CSS files
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Specify your HTML template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  mode: isDevelopment ? "development" : "production",
};
