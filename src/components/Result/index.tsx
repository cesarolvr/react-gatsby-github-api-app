import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Components
import { If, Pagination } from "src/components";

// Styles
import "./index.scss";

const Result = () => {
  const searching = useContext(Searching.Context);
  const { items, dirty, loading, name, total_count, page } = searching;

  return (
    <div className="results">
      <If
        condition={loading}
        renderIf={<div className="feedback">⌛ loading...</div>}
        renderElse={
          <>
            <If
              condition={items && items.length > 0}
              renderIf={
                <>
                  <div className="results-info">
                    <div className="holder">
                      <span>{total_count}</span> users found
                    </div>
                    <div className="holder">
                      page <span>{page}</span>
                    </div>
                  </div>
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
                              className="results-list__item-cell-thumb"
                            />
                          </div>
                          <div className="results-list__item-cell">{login}</div>
                          <div className="results-list__item-cell">
                            {type.toLowerCase()}
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
