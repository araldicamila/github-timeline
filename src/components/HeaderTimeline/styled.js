import styled from "styled-components";

export const HeaderTimelineContainer = styled.div`
  padding: 1rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    color: var(--white);
    margin: 0 0.5rem 0;
    font-size: 2rem;
  }

  span {
    color: #ea4aaa;

    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
  }

  button {
    background-color: transparent;
    border: 1px solid var(--white);
    color: var(--white);
    font-family: "Poppins", sans-serif;

    min-width: 100px;
    outline: none;
    border-radius: 5px;

    cursor: pointer;
    padding: 8px;
    transition: 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }
`;
