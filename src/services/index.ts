import { toast } from "react-toastify";
type getUsersType = {
  name: string;
};

const getUsers = async ({ name }: getUsersType): Promise<object> => {
  const users = await fetch(
    `https://api.github.com/search/users?q=${name} in:login&per_page=9&page=1&sort:followers`,
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
