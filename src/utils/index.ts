export const getQueryStringFromObject = (params: object): string => {
  const queryString = Object.keys(params)
    .map((key, index) => {
      if (!index) {
        return `?${key + "=" + params[key as keyof object]}`;
      } else {
        return key + "=" + params[key as keyof object];
      }
    })
    .join("&");

  return queryString;
};
