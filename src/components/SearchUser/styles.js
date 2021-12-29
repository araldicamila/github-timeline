import styled from "styled-components";
import media from "styled-media-query";

export const ContainerSearchUser = styled.div`
  min-width: 500px;

  background-color: #0c162d;
  border: 1px solid #202637;
  padding: 1.5rem;
  border-radius: 6px;

  ${media.lessThan("medium")`
    max-width: 90%;
    min-width: 200px;
  `}

  p {
    color: var(--yellow);
  }

  span,
  input,
  label,
  button,
  p {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  span {
    color: #627597;
  }

  label {
    color: var(--blue-text);
    font-weight: 600;
    display: block;

    margin-top: 1rem;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    color: var(--pink);
  }

  button {
    background-color: transparent;
    border: 1px solid var(--white);
    color: var(--white);

    min-width: 100px;
    outline: none;
    border-radius: 5px;

    cursor: pointer;
  }

  input {
    border: none;
    background-color: transparent;
    width: 100%;

    padding: 0.5rem;
    outline: none;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    caret-color: var(--white);
    color: var(--white);
    font-size: 1rem;
  }
`;
