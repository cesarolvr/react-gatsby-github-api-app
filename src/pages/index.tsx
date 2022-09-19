import * as React from "react";
import type { HeadFC } from "gatsby";

// Components
import { Search, Result } from "src/components";

const Home = () => {
  return (
    <main className="main">
      <Search />
      <Result />
    </main>
  );
};

export default Home;

export const Head: HeadFC = () => (
  <>
    <title>Great users</title>
  </>
);
