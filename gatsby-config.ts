import type { GatsbyConfig } from "gatsby";

const importAliasConfig = {
  resolve: `gatsby-plugin-alias-imports`,
  options: {
    alias: {
      "@src": "src",
      "@components": "src/components",
      "@pages": "src/pages",
    },
    extensions: ["ts", "tsx"],
  },
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `cesar-oliveira-web`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", importAliasConfig],
};

export default config;
