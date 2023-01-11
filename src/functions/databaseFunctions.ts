import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

async function fetchUserDatabase() {
  await getDocs(collection(db, "users")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  });
}
