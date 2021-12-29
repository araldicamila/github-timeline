import { formatDate } from "../../helpers";
import { TimelineItemContainer, TimelineItemList } from "./styles";

export const TimelineItem = ({ name, description, createdAt, sum }) => {
  return (
    <TimelineItemList>
      <TimelineItemContainer odd={sum % 2 !== 0}>
        <time>{formatDate(createdAt)}</time>
        <h3>{name}</h3>
        <p>{description}</p>
      </TimelineItemContainer>
    </TimelineItemList>
  );
};
