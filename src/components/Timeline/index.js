import { TimelineItem } from "../TimelineItem";
import { TimelineContainer } from "./styles";

export const Timeline = ({ list }) => {
  return (
    <TimelineContainer>
      {list &&
        list.map((item) => (
          <TimelineItem
            name={item.name}
            description={item.description}
            createdAt={item.created_at}
          />
        ))}
    </TimelineContainer>
  );
};
