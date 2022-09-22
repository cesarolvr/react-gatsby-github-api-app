import React, { useContext } from "react";
import { Helmet } from "react-helmet";

// Components
import { Search, Result, Loader } from "src/components";

// Contexts
import { Searching } from "src/contexts";

const Home = () => {
  const searchingContext = useContext(Searching.Context);

  const { total_count } = searchingContext;

  return (
    <main className="main main--home">
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
      <Loader />
      <header className="main__header">
        <a
          href="https://github.com/cesarolvr/cesar-oliveira-web"
          target="_blank"
        >
          🔗 source code here 🔗
        </a>
      </header>
      <h1 className="main__title">🐙 GitHub users ⭐</h1>
      <p className="main__subtitle">search any user in GitHub's API</p>
      <Search {...searchingContext} />
      <Result />
    </main>
  );
};

export default Home;
