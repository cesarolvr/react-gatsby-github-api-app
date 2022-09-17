import * as React from "react";
import { HeadFC } from "gatsby";

const NotFound = () => {
  return (
    <main>
      <h1>404</h1>
    </main>
  );
};

export default NotFound;

export const Head: HeadFC = () => (
  <>
    <title>Great users | 404 Not found</title>
  </>
);
