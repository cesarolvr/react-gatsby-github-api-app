import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Contexts
import { Searching } from "src/contexts";

type SearchData = {
  name: string;
};

const Search = () => {
  const { handleSubmit, register } = useForm<SearchData>();
  const {setSearching} = useContext(Searching.Context);

  const onSubmit: SubmitHandler<SearchData> = async (data: SearchData) => {
    const { name } = data;
    const users = await fetch(
      `https://api.github.com/search/users?q=${name} in:login&per_page=9&page=1`,
    )
      .then((response) => response.json())
      .then((parsedResponse) => parsedResponse);

    users && setSearching(users)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register("name")} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
