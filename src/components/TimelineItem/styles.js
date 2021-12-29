import styled, { css } from "styled-components";
import media from "styled-media-query";

export const TimelineItemList = styled.li`
  list-style-type: none;
  position: relative;
  min-height: 200px;
`;

export const TimelineItemContainer = styled.div`
  color: #fff;
  min-width: 200px;
  position: absolute;
  margin: 0 1rem;
  background-color: var(--blue);

  padding: 0.5rem 1rem;
  border-radius: 5px;

  ${media.between("medium", "large")`
    max-width: 160px;
    min-width: 160px;
  `}

  ${media.lessThan("medium")`
    max-width: 140px;
    min-width: 140px;
  `}

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

    background-color: var(--purple);
    border: 5px solid var(--dark-background);
    position: absolute;
    border-radius: 30px;
    top: calc(50% - 17px);
    z-index: 1;

    ${media.lessThan("medium")`
      width: 20px;
      height: 20px;
  `}
  }

  ${({ odd }) =>
    odd &&
    css`
    right: 45px;

    &::after {
      right: -7.5px;
    }

    &::before {
      right: -81px;
    }

    ${media.lessThan("medium")`
      right: 10px;

      &::before {
        right: -41px;
      }
    `}
  }`};

  ${({ odd }) =>
    !odd &&
    css`
      left: 45px;

      &::after {
        left: -7.5px;
      }

      &::before {
        left: -81px;
      }

      ${media.lessThan("medium")`
      left: 10px;

      &::before {
        left: -41px;
      }
    `}
    `}
`;
