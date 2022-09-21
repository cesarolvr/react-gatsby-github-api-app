import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Components
import { If, Pagination } from "src/components";

// Styles
import "./index.scss";

const Result = () => {
  const searching = useContext(Searching.Context);
  const { items, dirty, loading, name } = searching;

  return (
    <div className="results">
      <If
        condition={loading}
        renderIf={<>Loading</>}
        renderElse={
          <>
            <If
              condition={items && items.length > 0}
              renderIf={
                <>
                  <ul className="results-list">
                    <li className="results-list__item results-list__item-header">
                      <div className="results-list__item-cell">📷</div>
                      <div className="results-list__item-cell">login</div>
                      <div className="results-list__item-cell">type</div>
                    </li>

                    {items.map(({ login, id, avatar_url, type }) => {
                      return (
                        <li className="results-list__item" key={id}>
                          <div className="results-list__item-cell">
                            <img
                              src={avatar_url}
                              alt=""
                              style={{ width: "40px", borderRadius: "50%" }}
                            />
                          </div>
                          <div className="results-list__item-cell">{login}</div>
                          <div className="results-list__item-cell">{type.toLowerCase()}</div>
                        </li>
                      );
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
