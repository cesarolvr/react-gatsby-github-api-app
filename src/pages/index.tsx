import * as React from "react";
import type { HeadFC } from "gatsby";

// Components
import { Search, Result } from "src/components";

// Styles
import "./index.scss";

const Home = () => {
  return (
    <main className="main page-home">
      <h1 className="title">🐙 GitHub users ⭐</h1>
      <Search />
      <Result />
    </main>
  );
};

export default Home;

export const Head: HeadFC = () => (
  <>
    <title>⭐🐙⭐🐙 GITHUB USERS</title>
  </>
);
