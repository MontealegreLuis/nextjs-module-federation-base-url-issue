const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack(config) {
    const { isServer, plugins } = config;
    const location = isServer ? "ssr" : "chunks";
    plugins.push(
        new NextFederationPlugin({
          name: "application",
          filename: "application.js",
          remotes: {
            notifications: `notifications@http://127.0.0.1:3010/notifications/_next/static/${location}/notifications-mfe.js`,
          },
        })
    );

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
