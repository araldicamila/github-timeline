import { bounceInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

const animation = keyframes`${bounceInUp}`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;
  animation: 1s ${animation};

  &::after {
    content: "";
    background: var(--purple);
    position: absolute;
    width: 6px;
    height: 100%;
  }
`;
