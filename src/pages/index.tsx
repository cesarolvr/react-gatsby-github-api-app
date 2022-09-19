import * as React from "react";
import type { HeadFC } from "gatsby";

// Components
import { Search } from "src/components";

const Home = () => {
  return (
    <main>
      <Search />
    </main>
  );
};

export default Home;

export const Head: HeadFC = () => (
  <>
    <title>Great users</title>
  </>
);
