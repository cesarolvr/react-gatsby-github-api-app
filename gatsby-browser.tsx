import React from "react";
import type { GatsbyBrowser } from "gatsby";
import { ToastContainer } from "react-toastify";

// Contexts
import { Searching } from "./src/contexts";

// Styles
import "./src/styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <Searching.Provider>
    <>
      {element}
      <ToastContainer />
    </>
  </Searching.Provider>
);
