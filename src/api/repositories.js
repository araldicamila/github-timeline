import { api } from ".";

export const getUserRepos = async (user) => {
  const response = await api.get(`/users/${user}/repos`, {
    params: { sort: "created" },
  });

  return response.data;
};
