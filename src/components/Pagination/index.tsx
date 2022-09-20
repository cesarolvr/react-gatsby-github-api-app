import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Services
import services from "src/services";

const Pagination = () => {
  const searching = useContext(Searching.Context);
  const { currentPage, total_count, setSearching } = searching

  console.log("searching", searching);

  const totalPages = Array.from(Array(100).keys());

  const next = async (newPage: number) => {
    // const newSearching = await services.getUsers({ name });
    // setSearching({
    //     currentPage(newPage)
    // })
  }

  return (
    <div>
      <button disabled={currentPage < 2}>voltar</button>
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
      <button onClick={() => next(currentPage + 1)} disabled={currentPage === total_count}>próximo</button>
    </div>
  );
};

export default Pagination;
