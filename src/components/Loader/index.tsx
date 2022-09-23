import React, { useEffect, useState } from "react";
import classNames from "classnames";

// Styles
import "./index.scss";

const Loader = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>("🐙 ⭐");

  const animationTimeout: ReturnType<typeof setTimeout> = setTimeout(
    (): void => {
      setIsLoading(false);
    },
    600,
  );

  const emojisInterval = (): void => {
    const items: Array<string> = [
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
    let i: number = 0;
    (function loopIt(i): void {
      setTimeout(function (): void {
        setLoadingText(items[i]);
        if (i < items.length - 1) loopIt(i + 1);
      }, 300);
    })(i);
  };

  useEffect(() => {
    return (): void => {
      clearTimeout(animationTimeout);
    };
  });

  useEffect((): void => {
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
