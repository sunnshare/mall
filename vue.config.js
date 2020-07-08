module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/component",
        network: "@/network",
      },
    },
  },
};
