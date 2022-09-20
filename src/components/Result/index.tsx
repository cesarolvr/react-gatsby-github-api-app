import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Components
import { If, Pagination } from "src/components";

const Result = () => {
  const searching = useContext(Searching.Context);
  const { items, dirty } = searching;

  return (
    <div>
      <If
        condition={items && items.length > 0}
        renderIf={
          <>
            <ul>
              {items.map(({ login, id }) => {
                return <li key={id}>{login}</li>;
              })}
            </ul>
            <Pagination />
          </>
        }
      />
      <If condition={items && items.length === 0 && dirty} renderIf={<>Nada encontrado</>} />
    </div>
  );
};

export default Result;
