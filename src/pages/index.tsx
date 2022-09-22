import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import type { HeadFC } from "gatsby";
import classNames from "classnames";

// Components
import { Search, Result } from "src/components";

// Contexts
import { Searching } from "src/contexts";

const Home = () => {
  const searchingContext = useContext(Searching.Context);

  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("🐙 ⭐");

  const animationTimeout = setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const emojisInterval = () => {
    const items = [
      "🐚 🌊",
      "🐠 🦑",
      "🦀 🦐",
      "🦈 🐟",
      "💧 🤿",
      "🧶 🩴",
      "🐊 🐡",
      "🏄🏽‍♂️ 🏊🏽‍♀️",
      "👍🏾",
    ];
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

  const { total_count } = searchingContext;

  return (
    <main className="main page-home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          ⭐ {total_count ? `${total_count} users found` : `GITHUB USERS `} ⭐🐙
        </title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐙</text></svg>"
        />
      </Helmet>
      <div
        className={classNames("loader", {
          "loader--finished": !isLoading,
        })}
        title="loading"
      >
        <div className="content">{loadingText}</div>
      </div>
      <header className="header">
        <a
          href="https://github.com/cesarolvr/cesar-oliveira-web"
          target="_blank"
        >
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
