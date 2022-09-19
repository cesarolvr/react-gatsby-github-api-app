import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Components
import { If } from "src/components";

const Result = () => {
  const searching = useContext(Searching.Context);
  const { items } = searching;

  console.log("searching", searching);

  return (
    <div>
      <If condition={items && items.length > 0}>
        <ul>
          {items.map(({ login, id }) => {
            return <li key={id}>{login}</li>;
          })}
        </ul>
      </If>
    </div>
  );
};

export default Result;
