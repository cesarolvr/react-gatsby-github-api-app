import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Components
import { If, Pagination } from "src/components";

const Result = () => {
  const searching = useContext(Searching.Context);
  const { items, dirty, loading, name } = searching;

  return (
    <div>
      <If
        condition={loading}
        renderIf={<>Loading</>}
        renderElse={
          <>
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
            <If
              condition={items && items.length === 0 && dirty}
              renderIf={<>Your search - {name} - did not match any user.</>}
            />
          </>
        }
      />
    </div>
  );
};

export default Result;
