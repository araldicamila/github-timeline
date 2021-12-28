import { formatDate } from "../../helpers";
import { TimelineItemContainer, TimelineItemList } from "./styles";

export const TimelineItem = ({ name, description, createdAt }) => {
  return (
    <TimelineItemList>
      <TimelineItemContainer>
        <time>{formatDate(createdAt)}</time>
        <h3>{name}</h3>
        <p>{description}</p>
      </TimelineItemContainer>
    </TimelineItemList>
  );
};
