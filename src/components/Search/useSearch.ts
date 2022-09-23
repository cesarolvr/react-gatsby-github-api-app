import { ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Services
import services from "src/services";

// Types
import { SearchingContext } from "src/contexts/searching";

type SearchData = {
  name: string;
  page: number;
  sortDirection: string;
  sortBy: string;
};

const useSearch = ({
  setSearching,
  sortDirection,
  sortBy,
  items,
  name,
}: SearchingContext) => {
  const searchForm = useForm<SearchData>({
    mode: "onChange",
    defaultValues: {
      name,
    },
  });

  const onSubmit: SubmitHandler<SearchData> = async (
    data: SearchData,
  ): Promise<void> => {
    const { name }: { name: string } = data;

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

  return { searchForm, changeSortBy, changeSort, onSubmit };
};

export default useSearch;
