module.exports = {
  devServer: {
    proxy: {
      '/graphql': {
        target: process.env.VUE_APP_GRAPHQL_HTTP,
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/graphql': '' },
      },
    },
  },
};
