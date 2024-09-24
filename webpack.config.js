const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", // Use 'production' when ready for production build
  entry: "./src/js/main.js", // Main entry point for JS
  output: {
    filename: "bundle.[contenthash].js", // Output JS bundle with cache busting
    path: path.resolve(__dirname, "dist"), // Output folder for Webpack
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"], // Loads HTML files and injects into JS bundle
      },
      {
        test: /\.scss$/, // SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate file
          "css-loader", // Turns CSS into CommonJS
          "sass-loader", // Compiles SCSS into CSS
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Handle image files
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the /dist folder before each build
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Base HTML file
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css", // Output CSS with cache busting
    }),
  ],
  devtool: "source-map", // Enable source maps for debugging
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Update from 'contentBase' to 'static'
    },
    compress: true, // Enable gzip compression for better performance
    port: 9000, // Port to run the dev server
    open: true, // Automatically opens the browser
  },
};
