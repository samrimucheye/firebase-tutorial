import React, { useEffect, useState } from "react";
import SignOut from "../pages/SignOut";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db, auth } from "../../firebase-config";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [getMessages, setGetMessages] = useState([]);
  const collectionRef = collection(db, "messages");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message == "") return;
    try {
      await addDoc(collectionRef, {
        message,
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photoUrl: auth.currentUser.photoURL,
        timestamp: serverTimestamp(),
      });
      setMessage("");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const queryMessages = query(collectionRef, orderBy("timestamp"));
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setGetMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  return (
    <>
      <SignOut />
      <div className="flex flex-col">
        <section>
          <h1>{auth.currentUser.displayName}</h1>
          {getMessages.map((newmessage) => (
            <div key={newmessage.timestamp}>
              <p>{newmessage.uid}</p>
              <h1
                className={
                  auth.currentUser.uid === newmessage.uid
                    ? "bg-green-500 border-y-2 border-r-2"
                    : "bg-yellow-500 border-x-2"
                }
              >
                {newmessage.message}
              </h1>
            </div>
          ))}
        </section>
        <form onSubmit={handleSendMessage} className="flex-1 mt-96">
          <input
            value={message}
            type="text"
            placeholder="Type Your Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="btn bg-blue-400">
            send Message please know
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
