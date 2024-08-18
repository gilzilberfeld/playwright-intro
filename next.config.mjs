/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    // reactStrictMode: true,
    // swcMinify: true,
    // webpack: (webpackConfig, { webpack }) => {
    //   webpackConfig.experiments = { ...webpackConfig.experiments, topLevelAwait: true };
    //   webpackConfig.externals["node:fs"] = "commonjs node:fs";
  
    //   webpackConfig.plugins.push(
    //     // Remove node: from import specifiers, because Next.js does not yet support node: scheme
    //     // https://github.com/vercel/next.js/issues/28774
    //     new webpack.NormalModuleReplacementPlugin(
    //       /^node:/,
    //       (resource) => {
    //         resource.request = resource.request.replace(/^node:/, '');
    //       },
    //     ),
    //   );
  
    //   return webpackConfig;
    // } 
};

export default nextConfig;
