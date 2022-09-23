import React, { useContext } from "react";

// Contexts
import { Searching } from "src/contexts";

// Types
import { SearchingContext } from "src/contexts/searching";

// Services
import services from "src/services";

// Styles
import "./index.scss";

type PaginationType = {
  nextText?: string;
  prevText?: string;
};

const Pagination = ({
  nextText = "next",
  prevText = "prev",
}: PaginationType) => {
  const searching: SearchingContext = useContext(Searching.Context);
  const { page, total_count, name, setSearching } = searching;

  const navigate = async (newPage: number): Promise<void> => {
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
        className="pagination__button"
        disabled={page < 2}
        onClick={() => navigate(page - 1)}
      >
        {prevText}
      </button>
      <button
        className="pagination__button"
        onClick={() => navigate(page + 1)}
        disabled={searching.items.length === total_count}
      >
        {nextText}
      </button>
    </div>
  );
};

export default Pagination;
