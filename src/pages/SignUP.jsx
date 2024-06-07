import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";
const SignUP = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert(`user Signed up`);
      console.log(credential.user);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h2>firbase tutorial</h2>
      <form onSubmit={handleSignUp}>
        <h2>sign up</h2>
        <input
          value={email}
          type="text"
          name="text"
          id="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default SignUP;
