const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  basePath: "/notifications",
  webpack(config) {
    config.plugins.push(
        new NextFederationPlugin({
          name: "notifications",
          filename: "static/chunks/notifications-mfe.js",
          exposes: {
            "./HelloWorld": "./src/components/HelloWorld.tsx",
          },
          extraOptions: { debug: true }
        })
    );

    return config;
  },
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["next-connect"],
  }
};

module.exports = nextConfig;
