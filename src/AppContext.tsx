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
    username: "developer_sample",
    pic_url:
      "https://firebasestorage.googleapis.com/v0/b/notstagram-fcf48.appspot.com/o/profile_pictures%2Ffeey-kXXi6oxQ6bo-unsplash.jpg?alt=media&token=37908f3f-f929-4858-a5f3-036489fba064",
    full_name: "Dev Eloper",
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
