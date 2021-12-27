import styled from "styled-components";

export const ContainerSearchUser = styled.div`
  min-width: 500px;
  display: flex;

  button {
    background-color: var(--green);
    border: none;
    color: #fff;

    min-width: 150px;
    outline: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  input {
    border: none;
    background-color: #fff;
    width: 100%;

    padding: 0.5rem;
    outline: none;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
