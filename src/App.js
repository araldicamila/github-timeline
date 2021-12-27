import { useEffect, useState } from "react";
import { getUserRepos } from "./api/repositories";
import { SearchUser } from "./components/SearchUser";
import { Timeline } from "./components/Timeline";
import { TimelineItem } from "./components/TimelineItem";

function App() {
  const [user, setUser] = useState("");
  const [repositories, setRepositories] = useState([]);

  const getRepositories = () => {
    getUserRepos("araldicami").then((response) => {
      if (response && response.data) {
        const repos = [];

        response.data.map((item) => {
          repos.push({
            description: item.description,
            created_at: item.created_at,
            name: item.name,
          });
        });

        setRepositories(repos);
      }
    });
  };

  console.log(repositories);

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <main>
      <Timeline list={repositories} />
    </main>
  );
}

export default App;
