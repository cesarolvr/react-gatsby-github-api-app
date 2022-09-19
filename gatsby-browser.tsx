import React from "react";
import type { GatsbyBrowser } from "gatsby";

// Contexts
import { Searching } from "./src/contexts";

// Components
import { Layout } from "./src/components";

// Styles
import "./src/styles/index.scss";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <Searching.Provider>
    <Layout>{element}</Layout>
  </Searching.Provider>
);
