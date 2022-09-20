import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

const Pagination = () => {
  const searching = useContext(Searching.Context);

  console.log("searching", searching);

  const totalPages = Array.from(Array(100).keys());

  return (
    <div>
      <button>voltar</button>
      <select name="page">
        {totalPages.map((current) => {
          const item = current + 1;
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
      <button>próximo</button>
    </div>
  );
};

export default Pagination;
