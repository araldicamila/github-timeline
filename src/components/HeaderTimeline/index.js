import { HeaderTimelineContainer } from "./styles";

export const HeaderTimeline = ({ username, onClickBack }) => {
  return (
    <HeaderTimelineContainer>
      <span>
        →<h1>Hello, {username}</h1>
      </span>

      <button onClick={onClickBack}>Back to home</button>
    </HeaderTimelineContainer>
  );
};
