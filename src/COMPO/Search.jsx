import React, { useContext, useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]); // Store multiple users
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  // Debouncing function to limit the number of requests
  useEffect(() => {
    const handler = setTimeout(() => {
      if (username) {
        handleSearch();
      } else {
        setUsers([]); // Clear users if input is empty
      }
    }, 300); // Adjust the debounce time as needed

    return () => {
      clearTimeout(handler);
    };
  }, [username]);

  const handleSearch = async () => {
    setLoading(true);
    setErr(false);
    setUsers([]); // Reset users array

    const q = query(
      collection(db, "users"),
      where("displayName", ">=", username), // Support partial matches
      where("displayName", "<=", username + "\uf8ff") // Support partial matches
    );

    try {
      const querySnapshot = await getDocs(q);
      const foundUsers = [];
      querySnapshot.forEach((doc) => {
        foundUsers.push(doc.data());
      });
      setUsers(foundUsers);
    } catch (error) {
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = async (selectedUser) => {
    const combinedId =
      currentUser.uid > selectedUser.uid
        ? currentUser.uid + selectedUser.uid
        : selectedUser.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: selectedUser.uid,
            displayName: selectedUser.displayName,
            photoURL: selectedUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", selectedUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.error("Error selecting user:", error);
    }

    setUsername("");
    setUsers([]); // Clear user search results
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {loading && <span>Loading...</span>}
      {err && <span>User not found!</span>}
      {users.length > 0 && (
        <div className="userList">
          {users.map((user) => (
            <div key={user.uid} className="userChat" onClick={() => handleSelect(user)}>
              <img src={user.photoURL} alt={user.displayName} />
              <div className="userChatInfo">
                <span>{user.displayName}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {users.length === 0 && !loading && username && (
        <span>No users found</span>
      )}
    </div>
  );
};

export default Search;
