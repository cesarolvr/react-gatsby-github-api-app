import { toast } from "react-toastify";

// Utils
import { getQueryStringFromObject } from "src/utils";

type getUsersFilterType = {
  name: string;
  page: number;
  sortBy?: string;
  sortDirection?: boolean;
};

type githubFilterType = {
  q: string;
  per_page: number;
  page: any;
  order?: string;
};

type sortUsersType = {
  items: Array<any>;
  sortDirection: boolean;
  sortBy: string;
};

const getUsers = async (filters: getUsersFilterType): Promise<object> => {
  const { name, page, sortBy, sortDirection } = filters;

  const filterToGithubAPI: githubFilterType = {
    q: `${name} in:login`,
    page,
    per_page: 9,
    order: sortDirection ? "asc" : "desc",
  };

  const queryString = getQueryStringFromObject(filterToGithubAPI);

  const users = await fetch(
    `https://api.github.com/search/users${queryString}`,
  );

  const parsedResponse = await users.json();

  if (users.status !== 200) {
    toast.error(parsedResponse.message);
  }

  const items = [...parsedResponse.items];
  const sorteredItemsByLogin: object[] = items.sort((current, next) =>
    current.login.localeCompare(next.login),
  );

  return { ...parsedResponse, items: sorteredItemsByLogin };
};

const sortUsers = ({ items, sortDirection, sortBy }: sortUsersType) => {
  const newItems = [...items];
  const sorteredItems: object[] = newItems.sort((current, next) => {
    const valueToCheck = current[sortBy];

    if (sortDirection) {
      return valueToCheck.localeCompare(next[sortBy]);
    } else {
      return next[sortBy].localeCompare(valueToCheck);
    }
  });
  // console.log("sorteredItems", sorteredItems);

  return sorteredItems;
};

export default { getUsers, sortUsers };

// sort=followers|repositories|joined
// order=desc|asc
