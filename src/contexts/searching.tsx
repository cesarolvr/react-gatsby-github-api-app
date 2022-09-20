import React, { useState } from "react";

interface UsersContext {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

type SearchingContext = {
  items: UsersContext[] | [];
  currentPage: number;
  total_count: number | null;
  setSearching: Function;
  documentation_url?: string;
  message?: string;
};

const initialState: SearchingContext = {
  items: [],
  currentPage: 1,
  total_count: null,
  setSearching: () => null,
};

const Context = React.createContext<SearchingContext>(initialState);

const Provider = ({ children }: React.PropsWithChildren) => {
  const [searching, set] = useState(initialState);

  const setSearching = (newSearching: object) => {
    set({ ...searching, ...newSearching });
  };

  return (
    <Context.Provider value={{ ...searching, setSearching }}>
      {children}
    </Context.Provider>
  );
};

export default { Provider, Context };
