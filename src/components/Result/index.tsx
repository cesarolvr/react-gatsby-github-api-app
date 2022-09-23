import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Types
import { SearchingContext } from "src/contexts/searching";

// Components
import { If, Pagination } from "src/components";

// Styles
import "./index.scss";

const Result = (): React.ReactElement => {
  const searching: SearchingContext = useContext(Searching.Context);
  const { items, dirty, loading, name, total_count, page } = searching;

  return (
    <div className="results">
      <If
        condition={loading}
        renderIf={<div className="results__feedback">⌛ loading...</div>}
        renderElse={
          <>
            <If
              condition={items && items.length > 0}
              renderIf={
                <>
                  <div className="results__info">
                    <div className="holder">
                      <span>{total_count}</span> users found
                    </div>
                    <div className="holder">
                      page <span>{page}</span>
                    </div>
                  </div>
                  <ul className="results__list">
                    <li className="results__list-item results__list-item--header">
                      <div className="results__list-item-cell">📷</div>
                      <div className="results__list-item-cell">login</div>
                      <div className="results__list-item-cell">type</div>
                    </li>

                    {items.map(({ login, id, avatar_url, type }) => {
                      return (
                        <li className="results__list-item" key={id}>
                          <div className="results__list-item-cell">
                            <img
                              src={avatar_url}
                              alt=""
                              className="results__list-item-cell-thumb"
                            />
                          </div>
                          <div className="results__list-item-cell">{login}</div>
                          <div className="results__list-item-cell">
                            {type.toLowerCase() === "organization"
                              ? "org"
                              : type.toLowerCase()}
                          </div>
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
              renderIf={
                <div className="feedback">
                  your search <strong>{name}</strong> did not match any user 😔
                </div>
              }
            />
          </>
        }
      />
    </div>
  );
};

export default Result;
