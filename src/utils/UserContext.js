import { createContext } from "react";

const UserContext = () => {
  const data = createContext({
    userName: "default user",
  });
};

export default UserContext;
