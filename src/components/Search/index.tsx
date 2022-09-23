import React, { ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Types
import { SearchingContext } from "src/contexts/searching";

// Styles
import "./index.scss";

const Search = (props: SearchingContext) => {
  const { setSearching, page, sortDirection, sortBy, name, items } = props

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
