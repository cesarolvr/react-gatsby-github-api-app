import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Services
import services from "src/services";

const Pagination = () => {
  const searching = useContext(Searching.Context);
  const { page, total_count, name, setSearching } = searching;

  const totalPages = Array.from(Array(100).keys());

  const next = async (newPage: number) => {
    const newSearching = await services.getUsers({
      name,
      page: newPage,
    });
    setSearching({ page: newPage, ...newSearching });
  };

  const prev = async (newPage: number) => {
    const newSearching = await services.getUsers({
      name,
      page: newPage,
    });
    setSearching({ page: newPage, ...newSearching });
  };

  console.log("searching", searching);

  return (
    <div>
      <button disabled={page < 2} onClick={() => next(page - 1)}>voltar</button>
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
      <button onClick={() => next(page + 1)} disabled={page === total_count}>
        próximo
      </button>
    </div>
  );
};

export default Pagination;
