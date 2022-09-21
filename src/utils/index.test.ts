import { getQueryStringFromObject } from "./index";

test("testing getQueryStringFromObject() -> receiving a query string from an object ", () => {
  const query = getQueryStringFromObject({
    q: `cesar in:login`,
    page: 1,
    per_page: 9,
  });
  expect(query).toBe("?q=cesar in:login&page=1&per_page=9");
});
