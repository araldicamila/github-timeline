import styled from "styled-components";

export const TimelineItemList = styled.li`
  list-style-type: none;
  position: relative;
  min-height: 200px;

  &:nth-child(odd) div {
    right: 45px;

    &::after {
      right: -7.5px;
    }

    &::before {
      right: -83px;
    }
  }

  &:nth-child(even) div {
    left: 45px;

    &::after {
      left: -7.5px;
    }

    &::before {
      left: -77px;
    }
  }
`;

export const TimelineItemContainer = styled.div`
  color: #fff;
  min-width: 200px;
  position: absolute;
  margin: 0 1rem;
  background-color: var(--blue);

  padding: 0.5rem 1rem;
  border-radius: 5px;

  time {
    font-size: 0.75rem;
  }

  p,
  h3 {
    padding: 0;
    margin: 0;
  }

  h3 {
    margin: 2px 0;

    font-size: 1.1rem;
  }

  p {
    font-size: 0.83rem;
    text-transform: lowercase;
  }

  &::after {
    content: " ";
    background-color: var(--blue);
    position: absolute;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }

  &::before {
    content: " ";
    width: 30px;
    height: 30px;

    background-color: var(--yellow);
    border: 5px solid var(--dark-background);
    position: absolute;
    border-radius: 30px;
    top: calc(50% - 17px);
    z-index: 1;
  }
`;
