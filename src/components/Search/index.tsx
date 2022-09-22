import React, { ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Types
import { SearchingContext } from "src/contexts/searching";

// Services
import services from "src/services";

type SearchData = {
  name: string;
  page: number;
  sortDirection: string;
  sortBy: string;
};

// Styles
import "./index.scss";

const Search = (props: SearchingContext) => {
  const { setSearching, page, sortDirection, sortBy, name, items } = props
  
  const { handleSubmit, register, formState } = useForm<SearchData>({
    mode: "onChange",
    defaultValues: {
      name,
    },
  });

  const onSubmit: SubmitHandler<SearchData> = async (
    data: SearchData,
  ): Promise<void> => {
    const { name } = data;

    setSearching({ loading: true });
    const newSearching: object = await services.getUsers({
      name,
      page: 1,
      sortDirection,
      sortBy,
    });

    newSearching &&
      setSearching({
        name,
        loading: false,
        dirty: true,
        page: 1,
        ...newSearching,
      });
  };

  const changeSortBy = (e: ChangeEvent): void => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;

    const sorteredItems: object = services.sortUsers({
      items,
      sortDirection: sortDirection,
      sortBy: target.value,
    });

    setSearching({
      items: sorteredItems,
      sortDirection: sortDirection,
      sortBy: target.value,
    });
  };

  const changeSort = (): void => {
    const sorteredItems: object = services.sortUsers({
      items,
      sortDirection: !sortDirection,
      sortBy,
    });

    setSearching({
      items: sorteredItems,
      sortDirection: !sortDirection,
    });
  };

  return (
    <form className="search" onSubmit={handleSubmit(onSubmit)}>
      <div className="search__control">
        <input
          {...register("name", {
            required: true,
            minLength: 1,
          })}
          placeholder="search"
          type="text"
          className="search__input"
          data-testid="search"
        />
        <button
          className="search__button"
          data-testid="submit"
          type="submit"
          disabled={!formState.isValid}
        >
          {!formState.isValid ? `🔒` : `🔍`}
        </button>
      </div>
      <div className="search__sort">
        <select
          className="search__select"
          disabled={!(items?.length > 0)}
          onChange={changeSortBy}
          data-testid="type"
        >
          <option value="login">login</option>
          <option value="type">type</option>
        </select>
        <button
          className="search__button"
          onClick={() => changeSort()}
          type="button"
          data-testid="order"
          disabled={!(items?.length > 0)}
          title={sortDirection ? "sort ascending" : "sort descending"}
        >
          {sortDirection ? `⬆️` : `⬇️`}
        </button>
      </div>
    </form>
  );
};

export default Search;
