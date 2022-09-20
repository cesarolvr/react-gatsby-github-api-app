import { toast } from "react-toastify";

// Utils
import { getQueryStringFromObject } from "src/utils";

type getUsersFilterType = {
  name: string;
  currentPage: number;
};

type githubFilterType = {
  q: string;
  per_page: number;
  page: any;
  sort?: string;
  order?: string;
};

const getUsers = async (filters: getUsersFilterType): Promise<object> => {
  const { name, currentPage } = filters;

  const filterToGithubAPI: githubFilterType = {
    q: `${name} in:login`,
    page: currentPage,
    per_page: 9,
    sort: "",
    order: "desc",
  };

  const queryString = getQueryStringFromObject(filterToGithubAPI);

  const users = await fetch(
    `https://api.github.com/search/users${queryString}`,
  );

  const parsedResponse = await users.json();

  if (users.status !== 200) {
    toast.error(parsedResponse.message);
  }

  return parsedResponse;
};

export default { getUsers };

// sort=followers|repositories|joined
// order=desc|asc
