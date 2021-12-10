import { useContext, useState } from "react";
import { MangaContext } from "../Providers/Mangas";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { log, token, getManga } = useContext(MangaContext);

  const handleLog = () => {
    console.log(token);
    console.log(user, email, password);
    log({ username: user, password: password });
  };

  return (
    <div>
      <input
        placeholder="name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={() => handleLog()}>Login</button>
    </div>
  );
};
export default Login;
