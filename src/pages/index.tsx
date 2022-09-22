import React, { useContext } from "react";
import type { HeadFC } from "gatsby";

// Components
import { Search, Result } from "src/components";

// Contexts
import { Searching } from "src/contexts";

// Styles
import "./index.scss";

const Home = () => {
  const searchingContext = useContext(Searching.Context);
  return (
    <main className="main page-home">
      <h1 className="title">🐙 GitHub users ⭐</h1>
      <Search {...searchingContext} />
      <Result />
      <footer className="footer">
        <a href="https://github.com/cesarolvr/cesar-oliveira-web">
          🔗 source code here 🔗
        </a>
      </footer>
    </main>
  );
};

export default Home;

export const Head: HeadFC = () => (
  <>
    <title>⭐🐙⭐🐙 GITHUB USERS</title>
  </>
);
