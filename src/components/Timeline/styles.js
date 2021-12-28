import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;

  &::after {
    content: "";
    background: linear-gradient(180deg, #7dcbeb 0%, #a363da 100%);
    position: absolute;
    width: 6px;
    height: 100%;
  }
`;
