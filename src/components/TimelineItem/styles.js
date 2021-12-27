import styled from "styled-components";

export const TimelineItemList = styled.li`
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: var(--white);
  height: 150px;

  &:nth-child(odd) div {
    right: 45px;

    &::before {
      right: -73px;
    }
  }

  &:nth-child(even) div {
    left: 45px;

    &::before {
      left: -73px;
    }
  }
`;

export const TimelineItemContainer = styled.div`
  color: #fff;
  min-width: 200px;
  position: absolute;
  margin: 0 1rem;
  background-color: #7dcbeb;

  &::before {
    content: " ";
    width: 30px;
    height: 30px;

    background-color: var(--white);
    position: absolute;
    border-radius: 30px;
    top: 50%;
  }
`;
