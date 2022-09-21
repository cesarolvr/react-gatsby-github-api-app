import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Contexts
import { Searching } from "src/contexts";

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

const Search = () => {
  const { handleSubmit, register, formState } = useForm<SearchData>({
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const { setSearching, page, sortDirection, sortBy, items } = useContext(
    Searching.Context,
  );

  const onSubmit: SubmitHandler<SearchData> = async (
    data: SearchData,
  ): Promise<void> => {
    const { name } = data;

    setSearching({ loading: true });
    const newSearching: object = await services.getUsers({
      name,
      page,
      sortDirection,
      sortBy,
    });

    newSearching &&
      setSearching({
        name,
        loading: false,
        dirty: true,
        ...newSearching,
      });
  };

  const changeSort = (): void => {
    const sorteredItems: object = services.sortUsers({
      items,
      sortDirection: !sortDirection,
      sortBy,
    });

    console.log(sorteredItems);

    setSearching({
      items: sorteredItems,
      sortDirection: !sortDirection,
    });
  };

  return (
    <form className="search" onSubmit={handleSubmit(onSubmit)}>
      <div className="search-control">
        <input
          {...register("name", {
            required: true,
            minLength: 1,
          })}
          placeholder="search"
          type="text"
          className="input"
        />
        <button className="button" type="submit" disabled={!formState.isValid}>
          {!formState.isValid ? `🔒` : `🔍`}
        </button>
      </div>
      <div className="sort">
        <select
          className="select"
          disabled={!(items.length > 0)}
          {...register("sortBy")}
        >
          <option value="female">login</option>
          <option value="male">male</option>
        </select>
        <button
          className="button"
          onClick={() => changeSort()}
          type="button"
          disabled={!(items.length > 0)}
          title={sortDirection ? "sort ascending" : "sort descending"}
        >
          {sortDirection ? `⬆️` : `⬇️`}
        </button>
      </div>
    </form>
  );
};

export default Search;
