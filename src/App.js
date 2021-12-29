import { useState } from "react";
import { getUserRepos } from "./api/repositories";
import { HeaderTimeline } from "./components/HeaderTimeline";
import { SearchUser } from "./components/SearchUser";
import { Timeline } from "./components/Timeline";

function App() {
  const [user, setUser] = useState("");
  const [repositories, setRepositories] = useState([]);

  const [showTimeline, setShowTimeline] = useState(false);
  const [error, setError] = useState(false);

  const getRepositories = () => {
    getUserRepos(user)
      .then((response) => {
        if (response && response.data) {
          const repos = [];

          response.data.map((item) => {
            const year = new Date(item.created_at).getFullYear();

            const hasYear = repos.find((i) => i.year === year);

            if (hasYear) {
              hasYear.items.push({
                description: item.description,
                created_at: item.created_at,
                name: item.name,
              });
            } else {
              repos.push({
                year: year,
                items: [
                  {
                    description: item.description,
                    created_at: item.created_at,
                    name: item.name,
                  },
                ],
              });
            }
          });

          setRepositories(repos);
          setShowTimeline(true);
        }
      })
      .catch(() => setError(true));
  };

  return (
    <main>
      {!showTimeline ? (
        <SearchUser
          onClickSearch={getRepositories}
          user={user}
          setUser={setUser}
          error={error}
          setError={setError}
        />
      ) : (
        <>
          <HeaderTimeline
            username={user}
            onClickBack={() => setShowTimeline(false)}
          />
          <Timeline list={repositories} />
        </>
      )}
    </main>
  );
}

export default App;
