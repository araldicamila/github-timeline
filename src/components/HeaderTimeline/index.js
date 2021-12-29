import { HeaderTimelineContainer } from "./styled";

export const HeaderTimeline = ({ username }) => {
  return (
    <HeaderTimelineContainer>
      <span>
        →<h1>Hello, {username}</h1>
      </span>

      <button>Back to home</button>
    </HeaderTimelineContainer>
  );
};
