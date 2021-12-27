import { useState } from "react";
import { getUserRepos } from "./api/repositories";

function App() {
  const [user, setUser] = useState("");

  return (
    <main>
      <input onChange={(e) => setUser(e.target.value)} value={user} />
      <button onClick={() => getUserRepos(user)}>Pesquisar</button>
    </main>
  );
}

export default App;
