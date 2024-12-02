"use client"; // Ensure this file is a Client Component

import { Provider } from "react-redux";
import { store } from "./store";

const ClientProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
