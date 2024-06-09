import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("user signed");

      console.log(credential.user);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <h2>sign In please</h2>
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
        <button type="submit" className="btn bg-green">
          sign In
        </button>
      </form>
    </div>
  );
};
export default SignIn;
