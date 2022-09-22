import * as React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <main className="main notfound-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>🥺😔 nothing here</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧐</text></svg>"
        />
      </Helmet>
      <h1 className="title">🥺 404 😔</h1>
      <a className="link" href="/">
        back to search
      </a>
    </main>
  );
};

export default NotFound;
