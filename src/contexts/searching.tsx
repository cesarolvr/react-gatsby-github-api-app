import React, { useState } from "react";

interface UsersContext {
  name: string;
}

interface SearchingContext {
  users: UsersContext | [];
  currentPage: number;
  setSearching: Function | null;
}

const initialState: SearchingContext = {
  users: [],
  currentPage: 1,
  setSearching: null,
};

const Context = React.createContext<SearchingContext>(initialState);

const Provider = ({ children }: React.PropsWithChildren) => {
  const [searching, setSearching] = useState(initialState);

  return (
    <Context.Provider value={{ ...searching, setSearching }}>
      {children}
    </Context.Provider>
  );
};

export default { Provider, Context };
