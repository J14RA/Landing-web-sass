const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader, // Use style-loader in development for live changes
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader, // Inject CSS into DOM in dev mode
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Handle image files
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
      filename: "main.css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve files from 'dist'
    },
    compress: true,
    port: 9000,
    hot: true, // Enable Hot Module Replacement
    open: true, // Automatically open the browser
  },
  mode: isDevelopment ? "development" : "production", // Set mode based on environment
};
