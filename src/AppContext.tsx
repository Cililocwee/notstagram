import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useState, createContext } from "react";

export const AppContext = createContext(null);

interface Props {
  children: JSX.Element;
}

export const AppContextProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<any>();
  const [posts, setPosts] = useState<any>();
  const [currentUser, setCurrentUser] = useState<CurrentUser>({
    username: "dev_user",
    pic_url: "https://picsum.photos/25",
    full_name: "Devon Userton",
  });

  interface CurrentUser {
    username: string;
    pic_url: string;
    full_name: string;
  }

  async function fetchUserDatabase() {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(newData);
    });
  }

  async function fetchPostsDatabase() {
    await getDocs(collection(db, "posts")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(newData);
    });
  }

  // ** Export package typing is difficult
  const exportPackage: any = {
    users,
    posts,
    fetchUserDatabase,
    fetchPostsDatabase,
    currentUser,
    setPosts,
  };

  return (
    <AppContext.Provider value={exportPackage}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
