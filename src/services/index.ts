interface getUsersInterface {
  name: string;
}

const getUsers = ({ name }: getUsersInterface): Promise<object> =>
  fetch(
    `https://api.github.com/search/users?q=${name} in:login&per_page=9&page=1`,
  )
    .then((response) => response.json())
    .then((parsedResponse) => parsedResponse);

export default { getUsers };
