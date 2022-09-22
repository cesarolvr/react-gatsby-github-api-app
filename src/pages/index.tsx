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
      <header className="header">
        <a href="https://github.com/cesarolvr/cesar-oliveira-web">
          🔗 source code here 🔗
        </a>
      </header>
      <h1 className="title">🐙 GitHub users ⭐</h1>
      <p className="subtitle">just type something...</p>
      <Search {...searchingContext} />
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
