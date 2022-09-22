import React, { useContext, useEffect, useState } from "react";
import type { HeadFC } from "gatsby";
import classNames from "classnames";

// Components
import { Search, Result } from "src/components";

// Contexts
import { Searching } from "src/contexts";

// Styles
import "./index.scss";

const Home = () => {
  const searchingContext = useContext(Searching.Context);

  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("🐙 ⭐");

  const animationTimeout = setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const emojisInterval = () => {
    const items = ["🐚 🌊", "🐠 🦑", "🦀 🦐", "🦈 🐟", "💧 🤿", "🧶 🩴", "🐊 🐡", "🏄🏽‍♂️ 🏊🏽‍♀️", "👍🏾"];
    let i = 0;
    (function loopIt(i) {
      setTimeout(function () {
        setLoadingText(items[i]);
        if (i < items.length - 1) loopIt(i + 1);
      }, 500);
    })(i);
  };

  useEffect(() => {
    return () => {
      clearTimeout(animationTimeout);
    };
  });

  useEffect(() => {
    emojisInterval();
  }, []);

  return (
    <main className="main page-home">
      <div
        className={classNames("loader", {
          "loader--finished": !isLoading,
        })}
      >
        <div className="content">{loadingText}</div>
      </div>
      <header className="header">
        <a href="https://github.com/cesarolvr/cesar-oliveira-web">
          🔗 source code here 🔗
        </a>
      </header>
      <h1 className="title">🐙 GitHub users ⭐</h1>
      <p className="subtitle">search any user in GitHub's API</p>
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
