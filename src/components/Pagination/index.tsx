import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Services
import services from "src/services";

// Styles
import "./index.scss";

const Pagination = () => {
  const searching = useContext(Searching.Context);
  const { page, total_count, name, setSearching } = searching;

  const navigate = async (newPage: number) => {
    setSearching({ loading: true });
    const newSearching = await services.getUsers({
      name,
      page: newPage,
    });
    setSearching({
      page: newPage,
      loading: false,
      dirty: true,
      ...newSearching,
    });
  };

  return (
    <div className="pagination">
      <button
        className="button"
        disabled={page < 2}
        onClick={() => navigate(page - 1)}
      >
        prev
      </button>
      <button
        className="button"
        onClick={() => navigate(page + 1)}
        disabled={page === total_count}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
