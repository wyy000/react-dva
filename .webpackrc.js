export default {
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  "proxy": {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
    },
  },
}
