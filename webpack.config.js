const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleans the output directory before every build (optional)
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // For Sass/SCSS files
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/, // For CSS files
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // For image assets
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css", // Output CSS file
    }),
  ],
  // Corrected devServer configuration
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve files from 'dist' directory
    },
    compress: true, // Enable gzip compression
    port: 9000, // Use port 9000
    hot: true, // Enable Hot Module Replacement
    open: true, // Automatically open the browser on start
  },
  mode: "development",
};
