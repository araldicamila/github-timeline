import { useEffect, useState } from "react";
import { getUserRepos } from "./api/repositories";
import { HeaderTimeline } from "./components/HeaderTimeline";
import { SearchUser } from "./components/SearchUser";
import { Timeline } from "./components/Timeline";
import { TimelineItem } from "./components/TimelineItem";

function App() {
  const [user, setUser] = useState("");
  const [repositories, setRepositories] = useState([]);

  const [showTimeline, setShowTimeline] = useState(false);

  const getRepositories = () => {
    getUserRepos(user).then((response) => {
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
        setShowTimeline(true);
      }
    });
  };

  return (
    <main>
      {!showTimeline ? (
        <SearchUser
          onClickSearch={getRepositories}
          user={user}
          setUser={setUser}
        />
      ) : (
        <>
          <HeaderTimeline username={user} />
          <Timeline list={repositories} />
        </>
      )}
    </main>
  );
}

export default App;
