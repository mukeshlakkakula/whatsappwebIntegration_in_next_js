import webpack from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.FLUENTFFMPEG_COV": JSON.stringify(false),
        })
      );
    }
    return config;
  },
};

export default nextConfig;
