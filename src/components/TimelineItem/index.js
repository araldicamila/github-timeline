import { formatDate } from "../../helpers";
import { TimelineItemContainer, TimelineItemList } from "./styles";

export const TimelineItem = ({ name, description, createdAt }) => {
  return (
    <TimelineItemList>
      <TimelineItemContainer>
        <time>{formatDate(createdAt)}</time>
        <p>{name}</p>
        <p>{description}</p>
      </TimelineItemContainer>
    </TimelineItemList>
  );
};
