import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/meeting",
        destination: "https://github.com/pysageai/pysage",
        permanent: false,
      },
      {
        source: "/demo",
        destination: "https://app.schemamap.io/demo",
        permanent: false,
      },
      {
        source: "/docs",
        destination: "https://docs.schemamap.io",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "https://docs.schemamap.io/blog",
        permanent: false,
      },
      {
        source: "/status",
        destination: "https://stats.uptimerobot.com/ZELp9fP5Xn/",
        permanent: false,
      }
    ];
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug],
  },
});

export default withMDX(nextConfig);
