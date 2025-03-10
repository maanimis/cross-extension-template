const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const srcDir = path.join(__dirname, "..", "dist");
const outputDir = path.join(srcDir, "..", "build");
const scriptDir = path.join(outputDir, "js");
const publicDir = path.join(srcDir, "..", "public");

module.exports = {
  entry: {
    content_script: path.join(srcDir, "content_script", "index.js"),
    background: path.join(srcDir, "background", "index.js"),
    popup: path.join(srcDir, "popup", "index.js"),
  },

  output: {
    filename: "[name].js",
    path: scriptDir,
    clean: true,
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: publicDir,
          to: outputDir,
          globOptions: {
            dot: false,
            ignore: ["**/test/**"],
          },
        },
        {
          from: "node_modules/webextension-polyfill/dist/browser-polyfill.js",
          to: scriptDir,
        },
      ],
      options: {},
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
          },
        },
      }),
    ],
  },
};
