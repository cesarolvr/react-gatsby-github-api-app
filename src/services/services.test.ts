import services from "./index";

describe("Checking users ordering", () => {

  const items: Array<any> = [
    { login: "cesar", type: "user" },
    { login: "cesarandreu", type: "user" },
  ];

  test("Ascending", async () => {
    const query: Array<any> = services.sortUsers({
      items,
      sortDirection: true,
      sortBy: "login",
    });

    expect(query[0].login).toBe("cesar");
  });

  test("Descending", async () => {
    const query: Array<any> = services.sortUsers({
      items,
      sortDirection: false,
      sortBy: "login",
    });

    expect(query[0].login).toBe("cesarandreu");
  });
});
