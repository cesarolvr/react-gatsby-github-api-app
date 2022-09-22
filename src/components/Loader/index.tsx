import React, { useEffect, useState } from "react";
import classNames from "classnames";

// Styles
import "./index.scss";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("🐙 ⭐");

  const animationTimeout = setTimeout((): void => {
    setIsLoading(false);
  }, 600);

  const emojisInterval = (): void => {
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
      }, 300);
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
    <div
      className={classNames("loader", {
        "loader--finished": !isLoading,
      })}
      title="loading"
    >
      <div className="loader__content">{loadingText}</div>
    </div>
  );
};

export default Loader;
