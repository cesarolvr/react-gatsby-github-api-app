import * as React from "react";
import { Helmet } from "react-helmet";

const NotFound = (): React.ReactElement => {
  return (
    <main className="main main--notfound">
      <Helmet>
        <meta charSet="utf-8" />
        <title>🥺😔 nothing here</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧐</text></svg>"
        />
      </Helmet>
      <h1 className="main__title">🥺 404 😔</h1>
      <a className="main__link" href="/">
        back to search
      </a>
    </main>
  );
};

export default NotFound;
