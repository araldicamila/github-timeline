import { ContainerSearchUser } from "./styles";

export const SearchUser = ({ onClickSearch }) => {
  return (
    <ContainerSearchUser>
      <input placeholder="Username" />
      <button onClick={onClickSearch}>Pesquisar</button>
    </ContainerSearchUser>
  );
};
