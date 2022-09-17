import * as React from "react";
import type { HeadFC } from "gatsby";

const Home = () => {
  return (
    <main>
      <h1>Congratulations</h1>
    </main>
  );
};

export default Home;

export const Head: HeadFC = () => (
  <>
    <title>Great users</title>
  </>
);
