import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import React, {
  useState,
  createContext,
  useEffect,
  ProviderProps,
} from "react";

export const AppContext = createContext(null);

interface Props {
  children: JSX.Element;
}

export const AppContextProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<any>();
  const [posts, setPosts] = useState<any>();

  async function fetchUserDatabase() {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(newData);
      console.log(newData);
    });
  }

  async function fetchPostsDatabase() {
    await getDocs(collection(db, "posts")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(newData);

      console.log(newData);
    });
  }

  // ** Export package typing is difficult
  const exportPackage: any = {
    users,
    posts,
    fetchUserDatabase,
    fetchPostsDatabase,
  };

  return (
    <AppContext.Provider value={exportPackage}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
