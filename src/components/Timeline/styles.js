import { bounceInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

const animation = keyframes`${bounceInUp}`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 80px 0;
  animation: 1s ${animation};

  &::after {
    content: "";
    background: var(--purple);
    position: absolute;
    width: 6px;
    height: 100%;
  }
`;

export const FlagYear = styled.div`
  background-color: var(--dark-background);
  z-index: 2;

  p {
    color: var(--white);
    font-size: 1.2rem;

    margin: 0 0 5px;
  }
`;
